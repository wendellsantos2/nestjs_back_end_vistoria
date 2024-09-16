/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
 

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,  // Define se deve ignorar a expiração do token
      secretOrKey: 'your-secret-key',  // Deve ser a mesma chave usada no JwtModule
    });
  }

  async validate(payload: JwtPayload) {
    // Aqui você pode realizar validações adicionais, como verificar se o usuário ainda existe
    return { userId: payload.sub, username: payload.username };
  }
}
