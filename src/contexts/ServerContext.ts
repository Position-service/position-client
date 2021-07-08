import { createContext } from 'react';
import Server from '../api/PositionServer';

type ServerContextType = {
  server: Server;
};

const ServerContext = createContext<ServerContextType>({
  server: new Server(() => {}, ''),
});

export default ServerContext;
