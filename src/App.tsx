import Header from './components/organism/Header';
import IntroduceCard from './components/organism/IntroduceCard';
import SocialIconGroup from './components/molecule/SocialIconsGroup';
import './App.css';

function App() {
  return (
    <div>
      <Header />
    <main className='box-root m-auto max-w-[1024px] mt-20 font-main'>
      <IntroduceCard />
      <div className=''>
      <SocialIconGroup />
      </div>
      </main>
    </div>
    
  );
}

export default App;
