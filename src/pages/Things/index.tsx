import React from 'react';

import usePageTitle from '../../hooks/usePageTitle';
import Button from '../../components/Button';
import PreloadedImage from '../../components/PreloadedImage';
import logo from '../../images/logo.png';

import './Things.css';

export default function Things() {
  usePageTitle('Things');

  return (
    <div className="Things">
      <div className="Things">
        <PreloadedImage height={300} width={300} src={logo} />
      </div>
      <Button onPress={() => console.log('pressed')}>Bid</Button>
    </div>
  );
}
