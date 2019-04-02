import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import * as moment from 'moment';

export enum StartOrClose {
  START= 0,
  CLOSE= 1
}

export default abstract class BaseEnitty {
  //, {name: "create_time", nulltable: true}
  @Column({
    type: 'datetime',
    default: '1970-01-01 00:00:00'
  })
  public createTime: Date;

  //, {name: "update_time", nulltable: true}
  @Column({
    type: 'datetime',
    default: '1970-01-01 00:00:00'
  })
  public updateTime: Date;

  @Column({
    name: "is_delete",
    type: "enum",
    enum: StartOrClose,
    default: StartOrClose.START
  })
  public isDelete: StartOrClose;
/*
  @BeforeUpdate()
  public setUpdateTime() {
    this.updateTime = moment().format();
  }

  @BeforeUpdate()
  public setCreateTime() {
    this.createTime = moment().format();
  }
  */
}
