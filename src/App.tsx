import './App.css';
import AboutPage from './components/page/AboutPage';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
