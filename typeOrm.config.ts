module.exports = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'devtraining',
    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    migrations: [__dirname + 'dist/migrations/*.ts']
    }