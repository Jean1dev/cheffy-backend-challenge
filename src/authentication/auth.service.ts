import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from '../partner/partner.entity';
import { PartnerService } from '../partner/partner.service';
import { User } from '../user/user.entity';
import { UsersService } from '../user/user.service';
import { AuthType } from './auth-type.enum';
import { Authentication } from './auth.entity';
import { AuthSuccessDto } from './dto/auth-success.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthenticationService {

  constructor(
    @InjectRepository(Authentication)
    private readonly repository: Repository<Authentication>,
    @Inject(forwardRef(() => PartnerService))
    private readonly partnerService: PartnerService,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService
  ) { }

  async login(dto: LoginDto): Promise<AuthSuccessDto> {
    const auth = await this.repository.findOne({ where: { login: dto.login } })

    if (auth && auth.password === dto.password) {
      let partner, user
      if (auth.type === AuthType.PARTNER) {
        partner = await this.partnerService.findByLogin(auth.login)
      } else {
        user = await this.userService.findByLogin(auth.login)
      }

      const dto = new AuthSuccessDto()
      dto.login = auth.login
      dto.type = auth.type
      dto.partner = partner
      dto.user = user
      return dto
    }

    throw new HttpException('Wrong password/login', HttpStatus.FORBIDDEN);
  }

  createFromPartner(partner: Partner): Promise<Authentication> {
    const auth = new Authentication()
    auth.login = partner.login
    auth.password = partner.password
    auth.type = AuthType.PARTNER
    return this.repository.save(auth)
  }

  createFromUser(user: User): Promise<Authentication> {
    const auth = new Authentication()
    auth.login = user.login
    auth.password = user.password
    auth.type = AuthType.USER
    return this.repository.save(auth)
  }
}
