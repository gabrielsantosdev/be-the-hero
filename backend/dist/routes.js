"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
const connection_1 = __importDefault(require("./database/connection"));
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
routes.post('/ongs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto_1.default.randomBytes(4).toString('HEX');
    const jose = '123124';
    yield connection_1.default('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
    // tslint:disable-next-line:no-console
    return res.json({ id });
}));
exports.default = routes;
//# sourceMappingURL=routes.js.map