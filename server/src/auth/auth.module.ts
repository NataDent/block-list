import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PasswordService } from './password.service';
import { CookieService } from './cookie.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module( {
  imports: [
    UsersModule,
    JwtModule.register( {
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' }
    } )
  ],
  controllers: [ AuthController ],
  providers: [ AuthService, PasswordService, CookieService ]
} )
export class AuthModule { }
