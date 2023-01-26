module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'devtraining',
    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    migrations: [__dirname + 'dist/migrations/*.ts']
    }