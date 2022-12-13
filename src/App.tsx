import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Charts } from './pages/charts';
import { Finances } from './pages/finances';
import { Landing } from './pages/landing';
import { Settings } from './pages/settings';
import { Widg } from './pages/widget';
import { History } from './pages/history'
import { MainPage } from './pages/mainpage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Landing />}></Route>
        <Route path='/mainpage' element={<MainPage />}></Route>
        <Route path='/dashboard' element={<Charts />}></Route>
        <Route path='/finances' element={<Finances />}></Route>
        <Route path='/donuts' element={<History />}></Route>
        <Route path='/widg' element={<Widg />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
