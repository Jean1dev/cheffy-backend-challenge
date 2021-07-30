import { Body, Controller, Post } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { Partner } from './partner.entity';
import { PartnerService } from './partner.service';

@Controller('partner')
export class PartnerController {

  constructor(private readonly service: PartnerService) { }

  @Post()
  create(@Body() dto: CreatePartnerDto): Promise<Partner> {
    return this.service.create(dto);
  }
}
