import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayMusic from './components/PlayMusic/PlayMusic';
import Header from './components/HeaderForm/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/play' element={<PlayMusic />}></Route>
          <Route path='/header' element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
