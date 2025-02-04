import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '@hooks/Redux';

import {isLoadingSelector, reset} from './Slice';

import './MainContainer.scss';

const HomeMainContainer = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => isLoadingSelector(state));

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  return <div className="HomeMainContainer">HomeMainContainer</div>;
};

export default HomeMainContainer;
