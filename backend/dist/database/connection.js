"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
// tslint:disable-next-line:no-var-requires
const config = require('../../knexfile.ts');
const connection = knex_1.default(config.development);
exports.default = connection;
//# sourceMappingURL=connection.js.map