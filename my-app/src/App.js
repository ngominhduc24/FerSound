import React from 'react';
import Login from './components/Login/login';

import LogoFerSound from './components/Login/img/logofersound.png';

const App = () => {
  return(
    <div className="App">

      <div className="fersound-logo">
        <img src={LogoFerSound}/>
      </div>

      <div className="broke-line-top">
        <hr className="src"></hr>
      </div>

      <Login/>
    </div>
  )
};
export default App;