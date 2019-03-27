import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import PortfolioCoin from "../entity/PortfolioCoin";
import {StartOrClose} from "../entity/BaseEntity";

export class PortfolioCoinController {
  private portfolioCoinRepository = getRepository(PortfolioCoin);

  async all(request: Request, response: Response, next: NextFunction) {
   return this.portfolioCoinRepository.find({ where: { portfolioID: request.params.pid} });

   // return this.portfolioCoinRepository.find({ where: { portfolioID: request.params.pid, isDelete: StartOrClose.START} });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const portfolioCoin = this.portfolioCoinRepository.create(request.body);
    return this.portfolioCoinRepository.save(portfolioCoin);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let portfolioCoinToRemove = await this.portfolioCoinRepository.findOne(request.params.pcid);
    await this.portfolioCoinRepository.remove(portfolioCoinToRemove);
  }
}
