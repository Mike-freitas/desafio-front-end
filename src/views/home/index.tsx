import React from 'react';

import HomeMainContainer from '@features/home/MainContainer';

import MdswLogo from './images/logo.png';
import './index.scss';

const HomeView = (): JSX.Element => (
  <div className="HomeView">
    <img src={MdswLogo} alt="Logo MdsystemWeb" />
    <HomeMainContainer />
  </div>
);

export default HomeView;
