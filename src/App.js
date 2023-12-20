import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/Login/LoginPage';
import MainComponent from './pages/Home/MainComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (success) => {
    setIsLoggedIn(success);
  };

  return (
    <div style={{ background: '#000' }}>
      {isLoggedIn ? <MainComponent /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;


