import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import BaseEntity from './BaseEntity';
import Portfolio from './Portfolio';

@Entity()
export default class PortfolioCoin extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Portfolio, portfolio => portfolio.id, {
        onDelete:'CASCADE'
    })
    @JoinColumn()
    portfolio: Portfolio;

    @Column("varchar", { length: 50})
    coin: string;

    @Column("varchar", { name: "coin_symbolic", length: "10" })
    coinSymbolic: string;

    @Column("int")
    count: number;

    @Column("double", { name: "initial_investment"})
    initialInvestment: number;

    @Column("double", { name: "current_price"})
    currentPrice: number;

    @Column("double", { name: "mirror_price"})
    mirrorPrice: number;

    @Column("int", { name: "project_id"})
    projectID: number;

    @Column("double", { name: "mirror_profit"})
    mirrorProfit: number;

    @Column("double", { name: "mirror_profit_rate"})
    mirrorProfitRate: number;
}