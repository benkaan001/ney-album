import { useEffect, useRef } from 'react';
import './App.scss';
import Kitty from './assets/kitty.webp';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { gsap } from 'gsap';
import { TimelineLite, Power2 } from 'gsap';
gsap.registerPlugin(CSSRulePlugin);

function App() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule('.img-container:after');

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } });
    tl.to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut });
    tl.from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.4 });
  });
  return (
    <section className='main'>
      <p>REACT REVEAL</p>
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
