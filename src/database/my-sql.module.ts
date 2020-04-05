import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../models/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'nest',
            database: 'nestdb',
            entities: [User],
            synchronize: true,
        }),
    ],
    exports: [MySQLModule],
})
export class MySQLModule { }

// STEPS:
// 1) Run docker command: docker run -d -p 3306:3306 --name nest-mysql -e MYSQL_ROOT_PASSWORD=nest mysql:5.7
// 2) Create Database "nestdb" from GUI -> MySQL Workbench