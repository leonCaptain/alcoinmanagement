import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import BaseEntity from './BaseEntity';

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { name: "first_name", length: 50, nullable: true })
    firstName: string;

    @Column("varchar", { name: "last_name",  length: 50, nullable: true })
    lastName: string;

    @Column("int", { name: "age", nullable: true })
    age: number;
}
