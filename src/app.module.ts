import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnersModule } from './partner/partner.module';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'cheffy',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PartnersModule,
  ],
})
export class AppModule { }
