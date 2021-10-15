import React from 'react';
import { RouteComponentProps } from 'react-router';
import classNames from 'classnames';
import {
  useSharedElementContext,
  SharedElement,
} from 'react-shared-element-transition';

import usePageTitle from '../../hooks/usePageTitle';
import { photos } from '../../constants/content';
import Button from '../../components/Button';
import PreloadedImage from '../../components/PreloadedImage';

import './Things.css';

function pad<T>(items: T[], fill: T, total: number) {
  return [...items, ...Array(total - items.length).fill(fill)];
}

type Props = RouteComponentProps;

export default function Things({
  history: {
    location: { pathname },
  },
}: Props) {
  usePageTitle('Things');

  const { isTransitioning, activePathname } = useSharedElementContext();

  return (
    <div
      className={classNames('Things', {
        Things__transitioning: isTransitioning || activePathname !== pathname,
      })}
    >
      <div className="Things__grid">
        {pad(photos, '', 50).map((photo, index) => {
          const url = `/thing/${index}`;
          return photo ? (
            <SharedElement id={url} key={url} pathname={pathname}>
              <Button href={url}>
                <PreloadedImage height={50} width={50} src={photo} />
              </Button>
            </SharedElement>
          ) : (
            <div key={url} />
          );
        })}
      </div>
    </div>
  );
}
