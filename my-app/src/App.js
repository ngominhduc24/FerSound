import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayMusic from './components/PlayMusic/PlayMusic';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/play' element={<PlayMusic />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
