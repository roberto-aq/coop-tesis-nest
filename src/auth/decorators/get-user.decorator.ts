import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();

  const user = req.user;

  if (!user)
    throw new InternalServerErrorException('Usuario no encontrado (request)');

  return !data ? user : user[data];
});
