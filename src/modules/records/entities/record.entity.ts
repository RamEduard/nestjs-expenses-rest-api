import { Column, CreateDateColumn, Entity, Generated, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { RecordTypes } from './record.type';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { AccountEntity } from 'src/modules/accounts/entities/account.entity';

@Entity('records')
export class RecordEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column('decimal', { name: 'amount', precision: 32, scale: 12 })
  amount: string;

  @Column({ type: 'varchar', length: 3 }) // Example: USD
  currencyCode: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 1024 })
  description: string;

  @Column({ type: 'enum', enum: RecordTypes })
  type: RecordTypes;

  @ManyToOne(() => AccountEntity, (account) => account.records)
  account: AccountEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.records)
  category: CategoryEntity;

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
