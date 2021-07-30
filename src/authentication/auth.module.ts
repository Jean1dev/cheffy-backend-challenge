import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnersModule } from '../partner/partner.module';
import { UsersModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { Authentication } from './auth.entity';
import { AuthenticationService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Authentication]),
    forwardRef(() => PartnersModule),
    UsersModule,
  ],
  providers: [AuthenticationService],
  controllers: [AuthController],
  exports: [AuthenticationService]
})
export class AuthenticationModule {}
