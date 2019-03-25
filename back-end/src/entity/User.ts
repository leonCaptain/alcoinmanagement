import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import BaseEntity from './BaseEntity';

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 50 })
    firstName: string;

    @Column("varchar", { length: 50 })
    lastName: string;

    @Column("int")
    age: number;
}
