import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from './auth.service';
import { AuthSuccessDto } from './dto/auth-success.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly service: AuthenticationService) {}

  @Post()
  login(@Body() dto: LoginDto): Promise<AuthSuccessDto> {
    return this.service.login(dto);
  }

  @Get()
  get() {
    return "ok"
  }
}
