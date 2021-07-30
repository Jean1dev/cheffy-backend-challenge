import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthenticationService } from '../authentication/auth.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { Partner } from './partner.entity';

@Injectable()
export class PartnerService {

  constructor(
    @InjectRepository(Partner)
    private readonly repository: Repository<Partner>,
    @Inject(forwardRef(() => AuthenticationService))
    private readonly authService: AuthenticationService
  ) {}

  async create(dto: CreatePartnerDto): Promise<Partner> {
    const partner = new Partner();
    partner.firstName = dto.firstName;
    partner.login = dto.login;
    partner.password = dto.password;
    await this.authService.createFromPartner(partner)

    return this.repository.save(partner);
  }

  findByLogin(login: string): Promise<Partner> {
    return this.repository.findOne({ where: { login } })
  }

}
