import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
