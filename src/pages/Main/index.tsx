import React, { useContext } from 'react';
import classNames from 'classnames';

import usePageTitle from '../../hooks/usePageTitle';
import PreloadedImage from '../../components/PreloadedImage';
import { RouteComponentProps } from 'react-router-dom';
import SharedElement from '../../components/SharedElement';
import { SharedElementContext } from '../../components/SharedElementContextProvider';
import Price from '../../components/Price';
import NFT from '../../components/NFT';
import {
  getPhotoSrc,
  getPrefix,
  getPrice,
  getName,
  getNftData,
  getLatestPhotoId,
} from '../../constants/content';

import './Main.css';
import NotFound from '../NotFound';

type Props = RouteComponentProps<{ id?: string }>;

export default function Main({ match, location: { pathname } }: Props) {
  const { id = String(getLatestPhotoId()) } = match.params;
  const { isTransitioning, activePathname } = useContext(SharedElementContext);

  usePageTitle(getName(id));

  if (!getPhotoSrc(id)) {
    return <NotFound />;
  }

  return (
    <div
      className={classNames('Main', {
        Main__transitioning: isTransitioning || activePathname !== pathname,
      })}
    >
      <div className="Main__details">
        <div className="Main__name">{getName(id)}</div>
      </div>
      <div className="Main__marquee">
        <SharedElement id={`/thing/${id}`} pathname={pathname}>
          <PreloadedImage height={300} width={300} src={getPhotoSrc(id)} />
        </SharedElement>
      </div>
      <Price usd={getPrice(id)} name={getName(id)} prefix={getPrefix(id)} />
      <NFT {...getNftData(id)} name={getName(id)} />
    </div>
  );
}
