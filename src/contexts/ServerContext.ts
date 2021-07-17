import { createContext } from 'react';
import Server from '../api/PositionServer';

type ServerContextType = {
  server: Server;
  setServer: (token: string) => void;
};

const ServerContext = createContext<ServerContextType>({
  server: new Server(() => {}, ''),
  setServer: (_token: string) => {},
});

export default ServerContext;
