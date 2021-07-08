import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Server from './api/PositionServer';
import './App.css';
import ServerContext from './contexts/ServerContext';
import Login from './modules/account/Login';

function App() {
  const [userToken, setUserToken] = useState<string>('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setUserToken(token);
    } else {
      setUserToken('');
    }
  }, []);

  const server = new Server(() => {}, userToken);

  return (
    <ServerContext.Provider value={{ server }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main"></Route>
        </Switch>
      </Router>
    </ServerContext.Provider>
  );
}

export default App;
