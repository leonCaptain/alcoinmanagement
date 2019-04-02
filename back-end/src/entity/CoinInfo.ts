import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import BaseEntity from './BaseEntity';
import Project from './project';


@Entity()
export default class Coin extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	//一个项目可能有多个加密货币 比如 neo 有neo加上gas
	@ManyToOne(type => Project, project => project.id, {
        onDelete:'CASCADE'
    })
    @JoinColumn()
    project: Project;

    @Column("varchar", {nullable: true})
    name: string;

    @Column("varchar", {nullable: true})
    symbolic: string;

    //url
    @Column("varchar", {nullable: true})
    logo: string;

    @Column("varchar", {nullable: true})
    desc: string;

    @Column("varchar", {nullable: true})
    twitter: string;

}