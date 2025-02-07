import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContainer = (): JSX.Element => {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
};

export default MainContainer;
