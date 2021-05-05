import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';

import usePageTitle from '../../hooks/usePageTitle';
import { photos } from '../../constants/content';
import Button from '../../components/Button';
import { SharedElementContext } from '../../components/SharedElementContextProvider';
import PreloadedImage from '../../components/PreloadedImage';
import SharedElement from '../../components/SharedElement';

import './Things.css';

function pad<T>(items: T[], fill: T, total: number) {
  return [...items, ...Array(total - items.length).fill(fill)];
}

type Props = RouteComponentProps;

export default function Things({
  history: {
    location: { key },
  },
}: Props) {
  usePageTitle('Things');
  const { isTransitioning, activeRouteKey } = useContext(SharedElementContext);

  return (
    <div
      className="Things"
      style={{
        opacity: isTransitioning || activeRouteKey !== key ? 0 : 1,
      }}
    >
      <div className="Things__grid">
        {pad(photos, '', 50).map((photo, index) => {
          const url = `/thing/${index}`;
          return (
            <SharedElement id={url} key={url} routeKey={key}>
              <Button href={url}>
                <PreloadedImage height={50} width={50} src={photo} />
              </Button>
            </SharedElement>
          );
        })}
      </div>
    </div>
  );
}
