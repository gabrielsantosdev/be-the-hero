"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
// tslint:disable-next-line:no-var-requires
// const config = require('../../knexfile.ts');
const knexfile_1 = __importDefault(require("../../knexfile"));
const connection = knex_1.default(knexfile_1.default.development);
exports.default = connection;
//# sourceMappingURL=connection.js.map