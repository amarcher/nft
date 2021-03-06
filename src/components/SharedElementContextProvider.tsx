import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import classNames from 'classnames';

import './SharedElement.css';

type Props = {
  children: React.ReactElement;
};

export interface MountSharedElementInput {
  id: string;
  ref: HTMLDivElement;
}

export interface SharedElement {
  id: string;
  node?: HTMLDivElement;
  firstBoundingClientRect?: DOMRect;
  lastBoundingClientRect?: DOMRect;
  animation?: Animation;
}

export interface SharedElementToTransition extends SharedElement {
  node: HTMLDivElement;
  firstBoundingClientRect: DOMRect;
  lastBoundingClientRect: DOMRect;
  animation: Animation;
}

export type SharedElementContextType = {
  mountSharedElement: (
    sharedElement: MountSharedElementInput,
    pathname?: string
  ) => void;
  activePathname?: string;
  isTransitioning: boolean;
};

export const SharedElementContext = React.createContext<SharedElementContextType>(
  {
    mountSharedElement() {},
    isTransitioning: false,
    activePathname: undefined,
  }
);

function isSharedElementToTransition(
  sharedElement: SharedElement | SharedElementToTransition
): sharedElement is SharedElementToTransition {
  return !!(
    sharedElement.firstBoundingClientRect &&
    sharedElement.lastBoundingClientRect &&
    sharedElement.node &&
    typeof sharedElement.id !== 'undefined'
  );
}

function getKeyFrames(
  node: HTMLDivElement,
  first: DOMRect,
  last: DOMRect
): KeyframeEffect {
  const verticalTravelDistance = first.top - last.top;
  const horizontalTravelDistance = first.left - last.left;
  const scaleX = first.width / last.width;
  const scaleY = first.height / last.height;
  return new KeyframeEffect(
    node,
    [
      {
        transform: `matrix(${scaleX}, 0, 0, ${scaleY}, ${horizontalTravelDistance}, ${verticalTravelDistance})`,
      },
      { transform: 'none' },
    ],
    {
      duration: 200,
    }
  );
}

export default function ShareElementContextProvider({ children }: Props) {
  const { pathname } = useLocation();
  const ghostLayerRef = useRef<HTMLDivElement>(null);
  const prevPathname = useRef<string | undefined>(pathname);
  const activePathname = useRef<string | undefined>(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [sharedElements, setSharedElements] = useState<
    Record<string, SharedElement>
  >({});

  const attachElement = useCallback(
    ({ node, lastBoundingClientRect: last }: SharedElementToTransition) => {
      node.classList.add('SharedElement');
      node.style.top = `${last.top}px`;
      node.style.left = `${last.left}px`;
      node.style.height = `${last.height}px`;
      node.style.width = `${last.width}px`;
      node.style.transformOrigin = 'top left';
      ghostLayerRef.current?.appendChild(node);
    },
    [ghostLayerRef]
  );

  const runAnimation = useCallback(
    async ({ animation }: SharedElementToTransition) => {
      animation.play();
      return animation.finished;
    },
    []
  );

  const clearGhostLayer = useCallback(() => {
    if (!ghostLayerRef.current) return;

    while (ghostLayerRef.current.firstChild) {
      ghostLayerRef.current.removeChild(ghostLayerRef.current.firstChild);
    }
  }, [ghostLayerRef]);

  const addOrUpdateSharedElement = useCallback(
    ({ id, ref }: MountSharedElementInput) =>
      setSharedElements((prevSharedElements) => {
        if (prevSharedElements[id]?.lastBoundingClientRect) {
          // No-op
          return prevSharedElements;
        }

        if (prevSharedElements[id]?.firstBoundingClientRect) {
          // Update with final position
          const lastBoundingClientRect = ref.getBoundingClientRect();
          const node = ref.cloneNode(true) as HTMLDivElement;
          const animation = new Animation(
            getKeyFrames(
              node,
              prevSharedElements[id].firstBoundingClientRect!,
              lastBoundingClientRect
            )
          );
          const element = {
            ...prevSharedElements[id],
            lastBoundingClientRect,
            node,
            animation,
          } as SharedElementToTransition;
          attachElement(element);
          return {
            ...prevSharedElements,
            [id]: element,
          };
        }

        // Add
        return {
          ...prevSharedElements,
          [id]: {
            firstBoundingClientRect: ref.getBoundingClientRect(),
            id,
          },
        };
      }),
    [attachElement]
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

      return Promise.all(sharedElementsToTransition.map(runAnimation)).finally(
        endTransition
      );
    }

    console.log('did not transition: found no elements to transition');
    setIsTransitioning(false);
    return Promise.resolve().then(() => setIsTransitioning(false));
  }, [endTransition, sharedElements, runAnimation]);

  /*
   * The pathname has changed but we don't yet know whether the new route has shared elements.
   * 0. Store the new pathname as activePathname and use the mismatch with prevPathname to:
   *       (A) Prevent the new route from rendering
   *       (B) Mount the shared element as its updated
   * 1. Let the new route render its shared elements and call mountSharedElement
   * 2. Mount the shared element then make the ghost layer mask opaque.
   * 3. Expect to transition after the next setState stack has resolved.
   */
  useEffect(() => {
    if (activePathname.current && pathname !== activePathname.current) {
      activePathname.current = pathname;
    }
  }, [pathname]);

  /*
   * Transition now that the setState stack is clear
   */
  useEffect(() => {
    if (!isTransitioning && activePathname.current !== prevPathname.current) {
      maybeTransition().then(() => {
        prevPathname.current = pathname;
      });
    }
  }, [pathname, isTransitioning, maybeTransition]);

  const mountSharedElement = useCallback(
    (
      sharedElement: MountSharedElementInput,
      pathnameOfSharedElement?: string
    ) => {
      if (!sharedElements[sharedElement.id]) {
        console.log('adding element');
        addOrUpdateSharedElement(sharedElement);
      } else if (pathnameOfSharedElement !== prevPathname.current) {
        console.log('updating element');
        setIsTransitioning(true);
        addOrUpdateSharedElement(sharedElement);
      }
    },
    [addOrUpdateSharedElement, sharedElements]
  );

  return (
    <SharedElementContext.Provider
      value={{
        mountSharedElement,
        isTransitioning:
          isTransitioning ||
          prevPathname.current !== pathname ||
          activePathname.current !== pathname ||
          prevPathname.current !== activePathname.current,
        activePathname: prevPathname.current,
      }}
    >
      <>
        {children}
        <div
          className={classNames('GhostLayer__mask', {
            GhostLayer__mask__transitioning:
              prevPathname.current !== pathname ||
              activePathname.current !== pathname ||
              prevPathname.current !== activePathname.current ||
              isTransitioning,
          })}
        />
        <div className="GhostLayer" ref={ghostLayerRef} />
      </>
    </SharedElementContext.Provider>
  );
}
