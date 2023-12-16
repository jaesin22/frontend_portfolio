import Header from './components/organism/Header';
import IntroduceCard from './components/organism/IntroduceCard';
import SocialIconGroup from './components/molecule/SocialIconsGroup';
import './App.css';
import SectionSubTitle from './components/molecule/SectionSubTitle';

function App() {
  return (
    <div>
      <Header />
    <main className='box-root m-auto max-w-[1024px] mt-20 font-main'>
      <IntroduceCard />
      <SocialIconGroup />
      <section>
        <SectionSubTitle title='Work'/>
      </section>
      </main>
    </div>
    
  );
}

export default App;
