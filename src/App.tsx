import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Server from './api/PositionServer';
import './App.css';
import ServerContext from './contexts/ServerContext';
import Login from './modules/account/Login';
import SignUp from './modules/account/SignUp';
import VerifiedUser from './modules/account/VerifiedUser';
import Main from './modules/calendar/Main';

interface State {
  server: Server;
}

function App() {
  const [appState, setAppState] = useState<State>({
    server: new Server(() => {}, ''),
  });

  useEffect(() => {
    const token = window.localStorage.getItem('position-token');
    if (token) {
      setAppState({
        server: new Server(() => {}, token),
      });
    }
  }, []);

  return (
    <ServerContext.Provider
      value={{
        server: appState.server,
        setServer: (token: string) =>
          setAppState({ server: new Server(() => {}, token) }),
      }}
    >
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
          <Route path="/verified">
            <VerifiedUser />
          </Route>
        </Switch>
      </Router>
    </ServerContext.Provider>
  );
}

export default App;
