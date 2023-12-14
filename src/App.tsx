import Header from './components/organism/Header';
import IntroduceCard from './components/organism/IntroduceCard';
import './App.css';

function App() {
  return (
    <div>
      <Header />
    <main className='box-root m-auto max-w-[1024px] mt-20'>
      <IntroduceCard />
      </main>
    </div>
    
  );
}

export default App;
