import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';

import { AccountEntity } from 'src/modules/accounts/entities/account.entity';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { RecordTypes } from './record.type';
import { UserEntity } from 'src/modules/users/entities/user.entity';

@Entity('records')
export class RecordEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column('decimal', { name: 'amount', precision: 32, scale: 12 })
  amount: string;

  @Column({ type: 'varchar', length: 3 }) // Example: USD
  currencyCode: string;

  @Column({ type: 'date', nullable: true })
  date: Date;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 1024 })
  description: string;

  @Column({ type: 'enum', enum: RecordTypes })
  type: RecordTypes;

  @ManyToOne(() => AccountEntity, (account) => account.records)
  account: AccountEntity;

  @RelationId((record: RecordEntity) => record.account)
  @Column({ type: 'uuid', nullable: true })
  accountId: string;

  @ManyToOne(() => CategoryEntity, (category) => category.records)
  category: CategoryEntity;

  @RelationId((record: RecordEntity) => record.category)
  @Column({ type: 'uuid', nullable: true })
  categoryId: string;

  @ManyToOne(() => UserEntity, (user) => user.records)
  user: UserEntity;

  @RelationId((record: RecordEntity) => record.user)
  @Column({ type: 'uuid', nullable: true })
  userId: string;

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
