import { User } from './../../user/user.entity';

export class OrderDto {
  itens: any[];
  restaurantId: string;
  user: User
}
