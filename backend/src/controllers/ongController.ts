import connection from '../database/connection';
import crypto from 'crypto';

export default {
  async index(req: any, res: any) {
    const ongs = await connection('ongs').select('*');
    return res.json({ ongs });
  },

  async create(req: any, res: any) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
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
  },
};
