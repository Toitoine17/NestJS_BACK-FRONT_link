// app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/api/message')
  getMessage(): string {
    return 'Hello from NestJS!';
  }
}
