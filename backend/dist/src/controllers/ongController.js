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
const connection_1 = __importDefault(require("../database/connection"));
const crypto_1 = __importDefault(require("crypto"));
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ongs = yield connection_1.default('ongs').select('*');
            return res.json({ ongs });
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, whatsapp, city, uf } = req.body;
            const id = crypto_1.default.randomBytes(4).toString('HEX');
            yield connection_1.default('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
            // tslint:disable-next-line:no-console
            console.log(`Ong Cadastrada com o ID: ${id}`);
            return res.json({ id });
        });
    },
};
//# sourceMappingURL=ongController.js.map