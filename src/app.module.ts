import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'users/users.module';

import { PostgreSQLModule } from 'database/postgre-sql.module';

@Module({
  imports: [
    PostgreSQLModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
