
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService,private config:ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log("secret",this.config.get<string>('SECRET'))
    console.log(token)
    if (!token) {
      throw new UnauthorizedException("token not found");
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: this.config.get<string>('SECRET')
        }
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
       console.log(payload)
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}