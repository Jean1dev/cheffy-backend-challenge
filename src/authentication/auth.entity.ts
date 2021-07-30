import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuthType } from './auth-type.enum';

@Entity()
export class Authentication {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  type: AuthType;

  @Column({ default: true })
  isActive: boolean;
}
