import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../models/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',   // default user is (postgres)
            password: 'nest',
            database: 'nestdb', // default db is (postgres)
            entities: [User],
            synchronize: true,
        }),
    ],
    exports: [PostgreSQLModule],
})
export class PostgreSQLModule { }

// STEPS:
// 1) Run docker command: docker run --name nest-postgres -d -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=nest postgres:12.2
// 2) Enter the container terminal: docker exec -it nest-postgres bash
// 3) Enter the postgres CLI: psql -U root
// 4) Create Database: CREATE DATABASE nestdb;
// 5) Check it has been successfully created: \l