import { User } from '../../user/user.entity';
import { Partner } from './../../partner/partner.entity';
import { AuthType } from './../auth-type.enum';

export class AuthSuccessDto {
  login: string;
  type: AuthType;
  partner?: Partner;
  user?: User
}
