import { CityEntity } from 'src/city/entities/city.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'state' })
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  /**
   * !@state pode pertencer a varias cidades
   */
  @OneToMany(() => CityEntity, (city) => city.state)
  cities?: CityEntity[];
}
