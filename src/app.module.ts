import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'users/users.module';

import { MySQLModule } from 'database/my-sql.module';

@Module({
  imports: [
    MySQLModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
