import './App.scss';
import Kitty from './assets/kitty.webp';

function App() {
  return (
    <section className='main'>
      <div className='container'>
        <div className='img-container'>
          <img src={Kitty} alt='cat' />
        </div>
      </div>
    </section>
  );
}

export default App;
