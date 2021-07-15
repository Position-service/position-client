import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Server from './api/PositionServer';
import './App.css';
import ServerContext from './contexts/ServerContext';
import Login from './modules/account/Login';
import SignUp from './modules/account/SignUp';
import Main from './modules/calender/Main';

interface State {
  server: Server;
  userToken: string;
}

function App() {
  const [appState, setAppState] = useState<State>({
    server: new Server(() => {}, ''),
    userToken: '',
  });

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setAppState({
        server: new Server(() => {}, token),
        userToken: token,
      });
    }
  }, []);

  return (
    <ServerContext.Provider value={{ server: appState.server }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </ServerContext.Provider>
  );
}

export default App;
