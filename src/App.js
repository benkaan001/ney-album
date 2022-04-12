import { useEffect, useRef } from 'react';

import './App.scss';
import Kitty from './assets/kitty.webp';

function App() {
  let container = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    console.log(container, image);
  });
  return (
    <section className='main'>
      <div ref={(element) => (container = element)} className='container'>
        <div className='img-container'>
          <>
            <img ref={(element) => (image = element)} src={Kitty} alt='cat' />
          </>
        </div>
      </div>
    </section>
  );
}

export default App;
