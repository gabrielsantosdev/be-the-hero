"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ongController_1 = __importDefault(require("./controllers/ongController"));
const incidentController_1 = __importDefault(require("./controllers/incidentController"));
const profileController_1 = __importDefault(require("./controllers/profileController"));
const routes = express_1.default.Router();
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
routes.get('/ongs', ongController_1.default.index);
routes.post('/ongs', ongController_1.default.create);
routes.get('/profile', profileController_1.default.index);
routes.post('/incidents', incidentController_1.default.create);
routes.get('/incidents', incidentController_1.default.index);
routes.delete('/incidents/:id', incidentController_1.default.delete);
exports.default = routes;
//# sourceMappingURL=routes.js.map