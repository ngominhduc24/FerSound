import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayMusic from './components/PlayMusic/PlayMusic';
import Header from './components/HeaderForm/Header';
import Login from "./components/LoginForm/Login";
import SignupForm from "./components/SignupForm/index";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/play' element={<PlayMusic />}></Route>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignupForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
