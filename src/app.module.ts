import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'users/users.module';

import { MongoModule } from 'database/mongo-db.module';

@Module({
  imports: [
    MongoModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
