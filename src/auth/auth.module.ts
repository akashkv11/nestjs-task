import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      // secret: jwtConstants.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, ConfigService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}  