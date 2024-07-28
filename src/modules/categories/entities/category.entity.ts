import { Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { CategoryTypes } from './category.type';
import { RecordEntity } from 'src/modules/records/entities/record.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 1024 })
  description: string;

  @Column({ type: 'enum', enum: CategoryTypes })
  type: CategoryTypes;

  @OneToMany(() => RecordEntity, (record) => record.category)
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
