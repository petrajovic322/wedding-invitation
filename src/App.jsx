import * as React from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="app">
      <img src='./flowers.png' className='flowers'/>
      <img src='./flowers-top.png' className='flowers-top'/>
      <div className='card'>
        <div className='content'>
        <button className='language' onClick={() => changeLanguage(i18n.language === 'en' ? 'hr' : 'en')}>{i18n.language  === 'en' ? 'HR' : 'EN'}</button>
          <h1 className='names'>Vid & Petra</h1>
          <img src='./portrait.jpeg' className='portrait'/>
          <p className='info'>
            {t('intro1')}
            <br/>
            {t('intro2')}
            <br/>
          </p>
          <div className='info-box'>
            <div>
              <h3>{t('when')}</h3>
              {t('date')}
              <br/>
              {t('time')}
              <br/>
              {t('time2')}
              <br/>
            </div>
            <div>
              <h3>{t('where')}</h3>
              {t('whereInfo')}
            </div>
          </div>
          <p className='info'>
            {t('rsvp')}
            <br/>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4eQP1R2-WRP3bFU_s_jHRF7f-wcoWELVutL-zImagkyLtng/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
                className='rsvp-button'
              >
                RSVP
              </a>
            <br/>
            {t('contact')}
            <br/>
            {t('outro')}
            <br/>
            {t('outro2')}
            <br/>
            {t('outro3')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
