import React, { useContext, useEffect, useRef } from 'react';
import { SharedElementContext } from './SharedElementContextProvider';

import './SharedElement.css';

type Props = {
  children: React.ReactElement;
  id: string;
  pathname?: string;
};

export default function SharedElement({ children, id, pathname }: Props) {
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

    mountSharedElement(sharedElement, pathname);
  }, [id, mountSharedElement, ref, pathname]);

  return <div ref={ref}>{children}</div>;
}
