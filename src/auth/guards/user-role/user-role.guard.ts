import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Persona, PersonaRol } from 'prisma/clients/postgres-client';
import { Observable } from 'rxjs';
import { META_ROLES } from 'src/auth/decorators/role-protected.decorator';

interface UsuarioWithRol extends Persona {
  personaRol: PersonaRol[];
}

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(
      META_ROLES,
      context.getHandler(),
    );

    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    console.log(req);
    const user = req.user as UsuarioWithRol;
    console.log(user);

    if (!user) throw new BadRequestException('Usuario no encontrado');

    // TODO: Verificar y validar bien los roles con la tabla en la base de datos
    if (validRoles.includes(user.personaRol[0].idRol.toString())) {
      return true;
    }

    throw new ForbiddenException(
      `Este usuario no tiene permiso para hacer esta acción`,
    );
  }
}
