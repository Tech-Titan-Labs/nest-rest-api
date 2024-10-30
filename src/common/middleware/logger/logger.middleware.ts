import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // eslint-disable-next-line prettier/prettier
    console.log('Request made at : ',new Date().toDateString());
    next();
  }
}
