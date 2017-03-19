import http from 'http'
import expressConfig from './server/express'

const ENV = (process.env.NODE_ENV || 'development');
const appConfig = require(`./server/config/${ENV}`);

const app = expressConfig();
const server = http.createServer(app);

server.listen(appConfig.server.port, () => {
	console.log(`The application is up and running at ${appConfig.server.host}${appConfig.server.port} and then environment is currently: ${ENV}`);
});

global.config = appConfig;