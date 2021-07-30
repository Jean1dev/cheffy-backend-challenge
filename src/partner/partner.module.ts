import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from '../authentication/auth.module';
import { PartnerController } from './partner.controller';
import { Partner } from './partner.entity';
import { PartnerService } from './partner.service';

@Module({
  imports: [
    AuthenticationModule,
    TypeOrmModule.forFeature([Partner]),
  ],
  providers: [PartnerService],
  controllers: [PartnerController],
  exports: [PartnerService]
})
export class PartnersModule { }
