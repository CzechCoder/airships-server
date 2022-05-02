import {TypeOrmModuleOptions} from '@nestjs/typeorm'

require('dotenv').config()

export const config: TypeOrmModuleOptions =
    {
      type: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      port: parseInt(process.env.DB_PORT) as number,
      password: process.env.DB_PASSWORD,
      database: "airships",
      entities: ["dist/**/entities/*{.ts,.js}"],
      synchronize: true,
      migrations: ["dist/migrations/*{.ts,.js}"],
    }