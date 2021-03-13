import React from 'react';

import usePageTitle from '../../hooks/usePageTitle';
import { photos } from '../../constants/content';
import Button from '../../components/Button';
import PreloadedImage from '../../components/PreloadedImage';

import './Things.css';

export default function Things() {
  usePageTitle('Things');

  return (
    <div className="Things">
      <div className="Things__grid">
        {photos.map((photo, index) => (
          <Button href={`/thing/${index}`}>
            <PreloadedImage height={50} width={50} src={photo} />
          </Button>
        ))}
      </div>
    </div>
  );
}
