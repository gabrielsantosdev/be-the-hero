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
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page = 1 } = req.query;
            const [count] = yield connection_1.default('incidents').count();
            const incidents = yield connection_1.default('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(5)
                .offset((page - 1) * 5)
                .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf',
            ]);
            res.header('X-Total-Count', count['count(*)']);
            return res.json(incidents);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, value } = req.body;
            const ong_id = req.headers.authorization;
            const [id] = yield connection_1.default('incidents').insert({
                title,
                description,
                value,
                ong_id,
            });
            return res.json({ id });
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ong_id = req.headers.authorization;
            const incident = yield connection_1.default('incidents')
                .where('id', id)
                .select('ong_id')
                .first();
            if (incident.ong_id !== ong_id) {
                // tslint:disable-next-line:no-console
                console.log(ong_id);
                return res.status(401).json({ error: 'Operation not permitted' });
            }
            yield connection_1.default('incidents').where('id', id).delete();
            return res.status(204).send();
        });
    },
};
//# sourceMappingURL=incidentController.js.map