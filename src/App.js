import LocalizedStrings from 'react-localization';

import './App.css';


function App() {
  let strings = new LocalizedStrings({
    en:{
      intro1: 'Dear friends and family,',
      intro2: 'We are thrilled to invite you to be a part of our special day, our wedding, as we exchange our vows and celebrate our love.',
      date: '11.10.2024.',
      time: 'Gathering 4 p.m.',
      time2: 'Ceremony 5 p.m.',
      whereInfo: 'Imanje Laduč, Vinogradski put, 10292, Donji Laduč',
      rsvp: 'Please RSVP by 30.9.2024. by filling Google forms available on clicking button bellow:',
      contact: 'You can also contact us directly on phone: Petra +385998215080, Vid +385993731864',
      outro: 'We look forward to sharing this special moment with you!',
      outro2: 'With love,',
      outro3: 'Vid Mužević and Petra Jović',
      when: 'WHEN',
      where: 'WHERE'
    },
    it: {
      intro1: 'Drage obitelji i prijatelji,',
      intro2: 'S velikim veseljem vas pozivamo da budete dio našeg vjenčanja kada ćemo izreći svoje zavjete i proslaviti našu ljubav.',
      date: 'Datum: 11.10.2024.',
      time: 'Vrijeme okupljanja: 16 h',
      time2: 'Ceremonija: 17 h',
      whereInfo: 'Lokacija: Imanje Laduč, Vinogradski put, 10292, Donji Laduč',
      rsvp: 'Molimo vas da potvrdite svoj dolazak do 30.9.2024. tako što popunite Google formu dostupnu klikom na sljedeći gumb:',
      contact: 'Također nas možete kontaktirati direktno preko mobitela: Petra +385998215080, Vid +385993731864',
      outro: 'Radujemo se što ćemo ovaj poseban trenutak podijeliti s vama!',
      outro2: 'S ljubavlju,',
      outro3: 'Vid Mužević i Petra Jović',
      when: 'KADA',
      where: 'GDJE'
    }
  })

  return (
    <div className="app">
      <img src='./flowers.png' className='flowers'/>
      <img src='./flowers-top.png' className='flowers-top'/>
      <div className='card'>
        <div className='content'>
          <h1 className='names'>Vid & Petra</h1>
          <p className='info'>
            {strings.intro1}
            <br/>
            {strings.intro2}
            <br/>
          </p>
          <div className='info-box'>
            <div>
              <h3>{strings.when}</h3>
              {strings.date}
              <br/>
              {strings.time}
              <br/>
              {strings.time2}
              <br/>
            </div>
            <div>
              <h3>{strings.where}</h3>
              {strings.whereInfo}
            </div>
          </div>
          <p className='info'>
            {strings.rsvp}
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
            {strings.contact}
            <br/>
            {strings.outro}
            <br/>
            {strings.outro2}
            <br/>
            {strings.outro3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
