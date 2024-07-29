import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { RecordEntity } from 'src/modules/records/entities/record.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  accessToken: string;

  @Column({ nullable: true })
  accessTokenExpires: Date;

  @Column({ nullable: true })
  oauthProvider: string;

  @Column({ nullable: true })
  oauthId: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => RecordEntity, (record) => record.user)
  records: RecordEntity[];
}
