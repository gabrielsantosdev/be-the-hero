import express from 'express';
import ong from './controllers/ongController';
import incidents from './controllers/incidentController';
import profile from './controllers/profileController';
import sessions from './controllers/sessionController';

const routes = express.Router();

/**
 *  Rota / Recurso
 *
 */

/**
 * Métodos HTTP:
 *  GET: Search an information on the back-end;
 *  POST: Create a information on the back-end;
 *  PUT: Alterate a information on the back-end;
 *  DELETE: Delete a information on the back-end;
 */

/**
 * Query Params: Named parameters sent on the route after an "?" (Filters, pagination);
 * Route Params: Parameters utilized to identify resources (E.G IDs);
 * Request Body: Body of the requistion, utilized to create or alter resources.
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server,
 * NoSQL: MongoDB, CouchDB, etc
 * Query Builder: table('users').select('*').where
 */

routes.get('/ongs', ong.index);
routes.post('/ongs', ong.create);

routes.post('/sessions', sessions.create);

routes.get('/profile', profile.index);

routes.post('/incidents', incidents.create);
routes.get('/incidents', incidents.index);
routes.delete('/incidents/:id', incidents.delete);

export default routes;
