import React from 'react';
import classNames from 'classnames';

import { HIDE_NAV_AFTER_SCROLL_PX } from '../constants';
import useScrollDetection from '../hooks/useScrollDetection';
import Logo from './Logo';

import './Nav.css';

export default function Nav() {
  const { isGoingUp, isAboveThreshold } = useScrollDetection(
    HIDE_NAV_AFTER_SCROLL_PX
  );

  return (
    <div
      className={classNames('nav', {
        nav__hidden: !isGoingUp && isAboveThreshold,
      })}
    >
      <nav className="nav__content">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="/" className="nav__logo">
              <Logo />
              <span className="nav__title">Normal Fucking Things</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav__spacer" />
    </div>
  );
}
