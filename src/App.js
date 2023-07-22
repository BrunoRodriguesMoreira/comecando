import React from 'react';

//importar relogio
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

//relogio css
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

// Video
import VideoBg from '../src/assets/video.mp4';

// Css
import '.styles.css';

const App = () => {
  return <section className='page'>
    <div className="overlay"></div>
    <video src={VideoBg} autoPlay loop muted ></video>
    <div className="page__content">
      <h1>Começando em breve</h1>
      <h3>Me mande mensagem</h3>
      <FlipClockCountdown
      to={new Date().getTime() +24 * 3600 * 1000 + 5000}
      className='flip-clock'
      labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
      duration={0.5} 
      />
      <button className="btn"> Só clicar aqui </button>
    </div>
  </section>;
};

export default App;
