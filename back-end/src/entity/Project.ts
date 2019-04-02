import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import BaseEntity from './BaseEntity';

@Entity()
export default class Project extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	

}