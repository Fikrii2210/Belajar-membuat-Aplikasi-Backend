import Hapi from '@hapi/hapi';
import env from './env.js';
import routes from './routes/api.js';

const init = async () => {
  const server = Hapi.server({
    port: env.PORT,
    host: env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
