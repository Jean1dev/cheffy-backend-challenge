import { Controller, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrderController {

  @Post()
  doOrder(dto: OrderDto): string {
    return `order successful, clientId: ${dto.user.id}`
  }
}
