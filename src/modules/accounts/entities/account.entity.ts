import { Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { AccountTypes } from './account.type';
import { RecordEntity } from 'src/modules/records/entities/record.entity';

@Entity('accounts')
export class AccountEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 1024 })
  description: string;

  @Column({ type: 'enum', enum: AccountTypes })
  type: AccountTypes;

  @OneToMany(() => RecordEntity, (record) => record.account)
  records: RecordEntity[];

  @CreateDateColumn({
    type: 'timestamp',
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
    onUpdate: 'CURRENT_TIMESTAMP(3)',
  })
  updatedAt: Date;
}
