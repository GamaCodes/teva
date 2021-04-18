import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'TEVA Comercializadora'}</title>
        <html lang={lang || 'es'} />
        <meta name="description" content={description || 'Teva comercializadora y servicios para el campo SPR de RL'} />
      </Helmet>
      <App />
    </>
  );
};
