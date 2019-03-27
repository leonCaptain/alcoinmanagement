import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from 'express';
import Portfolio  from '../entity/Portfolio';
import {StartOrClose} from "../entity/BaseEntity";

export class PortfolioController {
  private portfolioRepository = getRepository(Portfolio);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.portfolioRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
  	const portfolio = this.portfolioRepository.create(request.body)
    return this.portfolioRepository.save(portfolio);
  }
}
