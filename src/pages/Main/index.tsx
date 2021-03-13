import React, { useState } from 'react';

import usePageTitle from '../../hooks/usePageTitle';
import Button from '../../components/Button';
import PreloadedImage from '../../components/PreloadedImage';
import useCrypto from '../../hooks/useCrypto';
import { RouteComponentProps } from 'react-router-dom';
import { getPhotoSrc, getPrice } from '../../constants/content';

import './Main.css';

type Props = RouteComponentProps<{ id?: string }>;

export default function Main({ match }: Props) {
  const { id } = match.params;

  const [price, setPrice] = useState(0);
  usePageTitle();
  useCrypto(getPrice(id), setPrice, true);

  const priceString = price ? `${price} ETH` : ` `;

  return (
    <div className="Main">
      <div className="Main__marquee">
        <PreloadedImage height={300} width={300} src={getPhotoSrc(id)} />
      </div>
      <Button className="Main__price" onPress={() => alert(`$${getPrice(id)}`)}>
        {priceString}
      </Button>
    </div>
  );
}
