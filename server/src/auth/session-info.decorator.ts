import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const SessionInfo = createParamDecorator(
    ( _, ctxt: ExecutionContext ) => ctxt.switchToHttp().getRequest().session,
)