import knex from 'knex';
// tslint:disable-next-line:no-var-requires
// const config = require('../../knexfile.ts');

import config from '../../knexfile';

const connection = knex(config.development);

export default connection;
