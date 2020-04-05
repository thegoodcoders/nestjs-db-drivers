import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  // The ony difference to make this example work in the different DBs is the decorator for the ID
  // For PostgresSQL & MySQL: @PrimaryGeneratedColumn()
  // For MongoDB: @ObjectIdColumn()

  // @PrimaryGeneratedColumn()   // mySQL & postgresSQL
  @ObjectIdColumn()           // mongoDB
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}