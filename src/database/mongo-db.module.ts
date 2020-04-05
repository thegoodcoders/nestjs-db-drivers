import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../models/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: 'localhost',
            database: 'nestdb',
            entities: [User],
            synchronize: true,
        }),
    ],
    exports: [MongoModule],
})
export class MongoModule { }

// STEPS:
// 1) Run docker command: docker run -d -p 27017-27019:27017-27019 --name nest-mongodb mongo:4.2.5
// 2) Done. No need to create the table