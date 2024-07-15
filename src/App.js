import LocalizedStrings from 'react-localization';

import './App.css';


function App() {
  let strings = new LocalizedStrings({
    en:{
      intro1: 'Dear friends and family,',
      intro2: 'We are thrilled to invite you to be a part of our special day as we exchange our vows and celebrate our love.',
      date: 'Date: 11.10.2024.',
      time: 'Time: 4 p.m.',
      time2: 'Ceremony time: 5 p.m.',
      where: 'Location: Imanje Laduč, Vinogradski put, 10292, Donji Laduč',
      where2: 'The ceremony, gathering, and celebration will all take place at the same location, Imanje Laduč.',
      rsvp: 'Please RSVP by 30.9.2024. by filling Google forms available on clicking button bellow:',
      contact: 'You can also contact us directly on phone: Petra +385998215080, Vid +385993731864',
      outro: 'We look forward to sharing this special moment with you!',
      outro2: 'With love,',
      outro3: 'Vid Mužević and Petra Jović'
    },
    it: {
      intro1: 'Drage obitelji i prijatelji,',
      intro2: 'S velikim veseljem vas pozivamo da budete dio našeg dana kada ćemo izreći svoje zavjete i proslaviti našu ljubav.',
      date: 'Datum: 11.10.2024.',
      time: 'Vrijeme okupljanja: 16 h',
      time2: 'Ceremonija: 17 h',
      where: 'Lokacija: Imanje Laduč, Vinogradski put, 10292, Donji Laduč',
      where2: 'Okupljanje, ceremonija i proslava održati će se na istoj lokaciji (Imanje Laduč).',
      rsvp: 'Molimo vas da potvrdite svoj dolazak do 30.9.2024. tako što popunite Google formu dostupnu klikom na sljedeći gumb:',
      contact: 'Također nas možete kontaktirati direktno preko mobitela: Petra +385998215080, Vid +385993731864',
      outro: 'Radujemo se što ćemo ovaj poseban trenutak podijeliti s vama!',
      outro2: 'S ljubavlju,',
      outro3: 'Vid Mužević i Petra Jović'
    }
  })

  return (
    <div className="app">
      <div className='card'>
        {/*<img src='/card.jpg' className='card-image' />*/}
        <div className='content'>
          <h1 className='names'>Vid & Petra</h1>
          <p className='info'>
            {strings.intro1}
            <br/>
            {strings.intro2}
            <br/>
            {strings.date}
            <br/>
            {strings.time}
            <br/>
            {strings.time2}
            <br/>
            {strings.where}
            <br/>
            {strings.where2}
            <br/>
            {strings.rsvp}
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
