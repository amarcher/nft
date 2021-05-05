import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import classNames from 'classnames';

import './SharedElement.css';

type Props = {
  children: React.ReactElement;
};

export interface SharedElement {
  id: string;
  node: HTMLElement;
  firstBoundingClientRect: DOMRect;
  lastBoundingClientRect?: DOMRect;
}

export interface SharedElementToTransition extends SharedElement {
  lastBoundingClientRect: DOMRect;
}

export type SharedElementContextType = {
  mountSharedElement: (
    sharedElement: SharedElementToTransition,
    routeKey?: string
  ) => void;
  activeRouteKey?: string;
  isTransitioning: boolean;
};

export const SharedElementContext = React.createContext<SharedElementContextType>(
  {
    mountSharedElement() {},
    isTransitioning: false,
    activeRouteKey: undefined,
  }
);

function isSharedElementToTransition(
  sharedElement: SharedElement
): sharedElement is SharedElementToTransition {
  return !!(
    sharedElement.firstBoundingClientRect &&
    sharedElement.lastBoundingClientRect &&
    sharedElement.node &&
    typeof sharedElement.id !== 'undefined'
  );
}

export default function ShareElementContextProvider({ children }: Props) {
  const { key: routeKey } = useLocation();
  const ghostLayerRef = useRef<HTMLDivElement>(null);
  const prevRouteKey = useRef<string | undefined>(routeKey);
  const activeRouteKey = useRef<string | undefined>(routeKey);

  const [sharedElements, setSharedElements] = useState<
    Record<string, SharedElement>
  >({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const attachElement = useCallback(
    (sharedElement: SharedElementToTransition) => {
      const {
        node,
        lastBoundingClientRect: last,
        firstBoundingClientRect: first,
      } = sharedElement;

      node.classList.add('SharedElement');
      const verticalTravelDistance = first.top - last.top;
      const horizontalTravelDistance = first.left - last.left;
      const scaleX = first.width / last.width;
      const scaleY = first.height / last.height;
      node.style.top = `${last.top}px`;
      node.style.left = `${last.left}px`;
      node.style.height = `${last.height}px`;
      node.style.width = `${last.width}px`;
      node.style.transformOrigin = 'top left';
      node.style.transform = `matrix(${scaleX}, 0, 0, ${scaleY}, ${horizontalTravelDistance}, ${verticalTravelDistance})`;
      ghostLayerRef.current?.appendChild(node);
      return sharedElement;
    },
    [ghostLayerRef]
  );

  const runAnimation = useCallback(
    async (sharedElement: SharedElementToTransition) => {
      const { node } = sharedElement;
      return new Promise((resolve, reject) => {
        try {
          node.addEventListener('transitionend', () => resolve(true), {
            once: true,
          });
          requestAnimationFrame(() => {
            node.style.transitionProperty = 'transform';
            node.style.transitionDelay = '200ms';
            node.style.transitionDuration = '500ms';
            node.style.transform = 'none';
          });
        } catch (e) {
          reject(false);
        }
      });
    },
    []
  );

  const transition = useCallback(
    async (sharedElement) => runAnimation(attachElement(sharedElement)),
    [attachElement, runAnimation]
  );

  const clearGhostLayer = useCallback(() => {
    if (!ghostLayerRef.current) return;

    while (ghostLayerRef.current.firstChild) {
      ghostLayerRef.current.removeChild(ghostLayerRef.current.firstChild);
    }
  }, [ghostLayerRef]);

  const addOrUpdateSharedElement = useCallback(
    ({ id, node, firstBoundingClientRect, lastBoundingClientRect }) =>
      setSharedElements((prevSharedElements) => {
        if (prevSharedElements[id]?.lastBoundingClientRect) {
          // No-op
          return prevSharedElements;
        }

        if (prevSharedElements[id]) {
          // Update with final position
          return {
            ...prevSharedElements,
            [id]: {
              ...prevSharedElements[id],
              lastBoundingClientRect,
              node: node.cloneNode(true) as HTMLDivElement,
            },
          };
        }

        // Add
        return {
          ...prevSharedElements,
          [id]: {
            firstBoundingClientRect,
            id,
          },
        };
      }),
    []
  );

  const endTransition = useCallback(() => {
    setSharedElements({});
    setIsTransitioning(false);
    setTimeout(clearGhostLayer, 200);
  }, [clearGhostLayer]);

  const maybeTransition = useCallback(async () => {
    const sharedElementsToTransition = Object.values(sharedElements).filter(
      isSharedElementToTransition
    );
    if (sharedElementsToTransition.length) {
      console.log(
        `starting transition of ${sharedElementsToTransition.length} element(s)`
      );
      return Promise.all(sharedElementsToTransition.map(transition)).finally(
        endTransition
      );
    }

    console.log('did not transition: found no elements to transition');
    return Promise.resolve().then(() => setIsTransitioning(false));
  }, [endTransition, sharedElements, transition]);

  /*
   * The routeKey has changed but we don't yet know whether the new route has shared elements.
   * 0. Store the new route key as activeRouteKey and use the mismatch with prevRouteKey to:
   *       (A) Prevent the new route from rendering
   *       (B) Mount the shared element as its updated
   * 1. Let the new route render its shared elements and call mountSharedElement
   * Mount the shared element then make the ghost layer mask opaque.
   * Expect to transition after the next setState stack has resolved.
   */
  useEffect(() => {
    if (activeRouteKey.current && routeKey !== activeRouteKey.current) {
      activeRouteKey.current = routeKey;
    }
  }, [routeKey]);

  /*
   * Transition now that the setState stack is clear
   */
  useEffect(() => {
    if (!isTransitioning && activeRouteKey.current !== prevRouteKey.current) {
      maybeTransition().then(() => {
        prevRouteKey.current = routeKey;
      });
    }
  }, [routeKey, isTransitioning, maybeTransition]);

  const mountSharedElement = useCallback(
    (sharedElement, routeKeyOfSharedElement) => {
      if (!sharedElements[sharedElement.id]) {
        console.log('adding element');
        addOrUpdateSharedElement(sharedElement);
      } else if (routeKeyOfSharedElement !== prevRouteKey.current) {
        console.log('updating element');
        addOrUpdateSharedElement(sharedElement);
      }
    },
    [addOrUpdateSharedElement, sharedElements]
  );

  return (
    <SharedElementContext.Provider
      value={{
        mountSharedElement,
        isTransitioning,
        activeRouteKey: prevRouteKey.current,
      }}
    >
      <>
        {children}
        <div
          className={classNames('GhostLayer__mask', {
            GhostLayer__mask__transitioning:
              prevRouteKey.current !== routeKey ||
              activeRouteKey.current !== routeKey ||
              prevRouteKey.current !== activeRouteKey.current ||
              isTransitioning,
          })}
        />
        <div className="GhostLayer" ref={ghostLayerRef} />
      </>
    </SharedElementContext.Provider>
  );
}
