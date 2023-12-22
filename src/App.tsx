import { useEffect } from 'react';

import SocialIconGroup from './components/molecule/SocialIconsGroup';
import Header from './components/organism/Header';
import IntroduceCard from './components/organism/IntroduceCard';
import SideProject from './components/organism/SideProject';
import Work from './components/organism/Work';
import './App.css';

const App = () => {
  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className='pb-[200px]'>
      <Header />
      <main className='box-root m-auto max-w-[1024px] mt-20 font-main'>
        <IntroduceCard />
        <SocialIconGroup />
        <section>
          <Work />
        </section>
        <section>
          <SideProject />
        </section>
      </main>
    </div>
  );
};

export default App;
