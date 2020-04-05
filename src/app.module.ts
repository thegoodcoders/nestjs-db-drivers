import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'users/users.module';

import { MongoModule } from 'database/mongo-db.module';
import { MySQLModule } from 'database/my-sql.module';
import { PostgreSQLModule } from 'database/postgre-sql.module';

@Module({
  imports: [
    MongoModule,
    // MySQLModule,
    // PostgreSQLModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
