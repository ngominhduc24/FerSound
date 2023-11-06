import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayMusic from './components/PlayMusic/PlayMusic';
import { Form } from "./components/Form";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}>
            <Route index path="login" element={<LoginForm />} />
            <Route path="sign" element={<SignupForm />} />
          </Route>
          <Route path='/play' element={<PlayMusic />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
