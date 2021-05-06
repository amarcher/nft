import React, { useContext } from 'react';
import classNames from 'classnames';

import usePageTitle from '../../hooks/usePageTitle';
import PreloadedImage from '../../components/PreloadedImage';
import { RouteComponentProps } from 'react-router-dom';
import SharedElement from '../../components/SharedElement';
import { SharedElementContext } from '../../components/SharedElementContextProvider';
import Price from '../../components/Price';
import {
  getPhotoSrc,
  getPrice,
  getLatestPhotoId,
} from '../../constants/content';

import './Main.css';

type Props = RouteComponentProps<{ id?: string }>;

export default function Main({ match, location: { key } }: Props) {
  const { id = String(getLatestPhotoId()) } = match.params;
  const { isTransitioning, activeRouteKey } = useContext(SharedElementContext);

  usePageTitle();

  return (
    <div
      className={classNames('Main', {
        Main__transitioning: isTransitioning || activeRouteKey !== key,
      })}
    >
      <div className="Main__marquee">
        <SharedElement id={`/thing/${id}`} routeKey={key}>
          <PreloadedImage height={300} width={300} src={getPhotoSrc(id)} />
        </SharedElement>
      </div>
      <Price usd={getPrice(id)} />
    </div>
  );
}
