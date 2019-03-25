import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {PortfolioCoin} from "../entity/PortfolioCoin";
import {StartOrClose} from "../entity/BaseEntity";

export class PortfolioCoinController {
  private portfolioCoinRepository = getRepository(PortfolioCoin);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.portfolioCoinRepository.find({ where: { portfolioID: request.params.pid, isDelete: StartOrClose.START} });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.portfolioCoinRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let portfolioCoinToRemove = await this.portfolioCoinRepository.findOne(request.params.pcid);
    portfolioCoinToRemove.isDelete = StartOrClose.CLOSE;
    await this.portfolioCoinRepository.save(portfolioCoinToRemove);
  }
}
