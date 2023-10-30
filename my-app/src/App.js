import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayMusic from './components/PlayMusic/PlayMusic';
import Header from './components/HeaderForm/Header';
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/play' element={<PlayMusic />}></Route>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/login' element={<LoginForm />}></Route>
          <Route path='/signup' element={<SignupForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
