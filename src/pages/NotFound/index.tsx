import React from 'react';

import usePageTitle from '../../hooks/usePageTitle';
import Title from '../../components/Title';

import './NotFound.css';

export default function NotFound() {
  usePageTitle('Not Found');

  return (
    <>
      <Title>404: That's an error</Title>
    </>
  );
}
