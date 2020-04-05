"use strict";
// Update with your config settings.
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
exports.default = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/db.sqlite',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './src/database/migrations',
        },
        useNullAsDefault: true,
    },
    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
//# sourceMappingURL=knexfile.js.map