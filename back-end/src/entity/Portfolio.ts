import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import BaseEntity from './BaseEntity';
import User from './User';

@Entity()
export default class Portfolio extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

 //one to many
  @OneToOne(type => User, user => user.id, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @Column("varchar", {length: 50})
  name: string;

  @Column("double", {name: "total_value_dollar"})
  totalValueByDollar: number;

  @Column("double", {name: "total_value_btc"})
  totalValueByBtc: number;

  @Column("double", {name: "total_profit_rate"})
  totalProfitRate: number;

  @Column("double", {name: "total_profit"})
  totalProfit: number;
}
