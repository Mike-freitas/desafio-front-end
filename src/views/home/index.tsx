import React from 'react';

import MdswLogo from './images/logo.png';
import './index.scss';

const HomeView = (): JSX.Element => (
  <div className="HomeView">
    <img src={MdswLogo} alt="Logo MdsystemWeb" />
  </div>
);

export default HomeView;
