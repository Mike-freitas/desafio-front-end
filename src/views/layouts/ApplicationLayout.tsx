import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@hooks/Redux';
import { isLoadingSelector, reset } from '../../features/home/Slice';

import Banner from '../../components/banner/banner';
import About from '../../components/about/about';  
import Service from '@components/service/service';
import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import Loading from '@components/loading/index';

import { NotificationContainer } from '@features/toastify-notification';

import { BannerType } from '../../types/home'; 

import './ApplicationLayout.scss';

const API_URL = process.env.REACT_APP_API_URL || 'https://www.mdsystemweb.com.br/projects/api/v1/test/layout.php';

const ApplicationLayout = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => isLoadingSelector(state));

  const [banner, setBanner] = useState<BannerType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchBanners = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados do banner.');
      }
      const data = await response.json();
      setBanner(data.banner[0]);
    } catch (error) {
      setError('Erro ao buscar banners.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanners();
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="HomePage">
      <Loading visible={isLoading} text="Carregando..." overlay={true} />  

      <section className="main_container">
        <div className="header_container">
          {isLoading ? <Loading visible={true} text="Carregando Header..." overlay={false} /> : <Header />}
        </div>

        <div className="about_container">
          {error ? <p>{error}</p> : banner ? <Banner banner={banner} /> : <p>Nenhum banner encontrado.</p>}
          <About />
        </div>

        <div className="service_container">
          {isLoading ? <Loading visible={true} text="Carregando serviços..." overlay={false} /> : <Service />}
        </div>
      </section>

      <div className="footer_container">
        {isLoading ? <Loading visible={true} text="Carregando Footer..." overlay={false} /> : <Footer />}
      </div>
      <Outlet />
      <NotificationContainer />
    </div>
  );
};

export default ApplicationLayout;
