import React from 'react';
import PreloadedImage from './PreloadedImage';
import logo from '../images/logo.png';

type Props = {
  size?: number;
};

export default function Logo({ size = 16 }: Props) {
  return <PreloadedImage src={logo} height={size} width={size} />;
}
