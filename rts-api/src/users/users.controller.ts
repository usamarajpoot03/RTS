import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    return 'This action returns all users';
  }

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new user';
  }
}
