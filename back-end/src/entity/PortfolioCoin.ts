import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import BaseEntity from './BaseEntity';
import Portfolio from './Portfolio';
import Coin from './CoinInfo';


@Entity()
export default class PortfolioCoin extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Portfolio, portfolio => portfolio.id, {
        onDelete:'CASCADE'
    })
    @JoinColumn()
    portfolio: Portfolio;

    @OneToOne(type => Coin, Coin => Coin.id, { onDelete: 'CASCADE' })
    Coin: Coin;

    @Column("int")
    count: number;

    @Column("double", { name: "initial_investment"})
    initialInvestment: number;

    // @Column("double", { name: "current_price"})
    // currentPrice: number;

    // @Column("double", { name: "mirror_price"})
    // mirrorPrice: number;
    
    //OneToOne
    @Column("int", { name: "project_id"})
    projectID: number;

    // @Column("double", { name: "mirror_profit"})
    // mirrorProfit: number;

    // @Column("double", { name: "mirror_profit_rate"})
    // mirrorProfitRate: number;
}
