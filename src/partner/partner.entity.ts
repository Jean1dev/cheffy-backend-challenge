import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
