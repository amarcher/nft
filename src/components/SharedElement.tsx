import React, { useContext, useEffect, useRef } from 'react';
import { SharedElementContext } from './SharedElementContextProvider';

import './SharedElement.css';

type Props = {
  children: React.ReactElement;
  id: string;
  routeKey?: string;
};

export default function SharedElement({ children, id, routeKey }: Props) {
  const { mountSharedElement } = useContext(SharedElementContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const sharedElement = {
      node,
      firstBoundingClientRect: node.getBoundingClientRect(),
      lastBoundingClientRect: node.getBoundingClientRect(),
      id,
    };

    mountSharedElement(sharedElement, routeKey);
  }, [id, mountSharedElement, ref, routeKey]);

  return <div ref={ref}>{children}</div>;
}
