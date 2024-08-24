import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-patload.interface';
import { Persona } from 'prisma/clients/postgres-client';
import { PostgresPrismaService } from 'src/prisma-db/postgres-prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly postgresPrisma: PostgresPrismaService) {
    super({
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<Persona> {
    const { id } = payload;

    const user = await this.postgresPrisma.persona.findUnique({
      where: { idPersona: id },
    });

    if (!user) throw new UnauthorizedException('Token inválido');

    return user;
  }
}
