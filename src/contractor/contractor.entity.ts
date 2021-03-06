import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, OneToMany } from 'typeorm';
import { Project } from 'src/project/project.entity';

@Entity()
export class Contractor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
   
  @Column({unique: true})
  contractorName: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  contactPerson: string;

  @OneToMany(() => Project, (project: Project) => project.contractor)
  public projects: Project[];

}