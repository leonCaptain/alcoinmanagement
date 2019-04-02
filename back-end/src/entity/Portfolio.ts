import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn} from "typeorm";
import BaseEntity from './BaseEntity';
import User from './User';

@Entity()
export default class Portfolio extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;


  @OneToOne(type => User, user => user.id, { onDelete: 'CASCADE' })
  user: User;

  @Column("varchar", {length: 50, name: 'name',  default: "默认组合"})
  name: string;

  @Column("double", {name: "total_value_dollar", default: "0"})
  totalValueByDollar: number;

  @Column("double", {name: "total_value_btc", default: "0"})
  totalValueByBtc: number;

  @Column("float", {name: "total_profit_rate", default: "0"})
  totalProfitRate: number;

  @Column("double", {name: "total_profit", default: "0"})
  totalProfit: number;
}
