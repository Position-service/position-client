import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Server from './api/PositionServer';
import './App.css';
import ServerContext from './contexts/ServerContext';
import UserContext from './contexts/UserContext';
import Login from './modules/account/Login';
import SignUp from './modules/account/SignUp';
import VerifiedUser from './modules/account/VerifiedUser';
import Main from './modules/calendar/Main';
import { UserDataResponse } from './types/AccountResponse';

interface State {
  server: Server;
  user: UserDataResponse;
}

function App() {
  const [appState, setAppState] = useState<State>({
    server: new Server(() => {}, ''),
    user: {} as UserDataResponse,
  });

  useEffect(() => {
    const token = window.localStorage.getItem('position-token');
    if (token) {
      const server = new Server(() => {}, token);
      server
        .fetchAllData()
        .then((res) => {
          setAppState({
            server,
            user: res.data,
          });
        })
        .catch((e) => {});
    }
  }, []);

  return (
    <ServerContext.Provider
      value={{
        server: appState.server,
        setServer: (token: string) =>
          setAppState({ ...appState, server: new Server(() => {}, token) }),
      }}
    >
      <UserContext.Provider
        value={{
          user: appState.user,
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
            <Route path="/verification">
              <VerifiedUser />
            </Route>
            <Route>
              <Main />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </ServerContext.Provider>
  );
}

export default App;
