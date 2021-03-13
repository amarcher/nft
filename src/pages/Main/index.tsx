import React, { useState } from 'react';

import usePageTitle from '../../hooks/usePageTitle';
import Button from '../../components/Button';
import PreloadedImage from '../../components/PreloadedImage';
import useCrypto from '../../hooks/useCrypto';

import './Main.css';

const USD = 0.84;

export default function Main() {
  const [price, setPrice] = useState(0);
  usePageTitle();
  useCrypto(USD, setPrice, true);

  return (
    <div className="Main">
      <div className="Main__marquee">
        <PreloadedImage
          height={300}
          width={300}
          src="https://mcdonaldpaper.com/media/catalog/product/cache/757ea7d2b7282843694bdb6de7a23598/b/w/bwk6145.jpg"
        />
      </div>
      <Button className="Main__price" onPress={() => console.log(`$${USD}`)}>
        {price} ETH
      </Button>
    </div>
  );
}
