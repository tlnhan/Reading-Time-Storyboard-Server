import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountUser } from './interface/account-user.interface';

@Injectable()
export class AccountUserService {
  constructor(
    @InjectModel('AccountUser')
    private readonly accountUserModel: Model<AccountUser>,
  ) {}

  async getAccountUser(): Promise<AccountUser[]> {
    return this.accountUserModel.find().exec();
  }

  async getAccountUserId(Id: number): Promise<AccountUser> {
    return this.accountUserModel.findOne({ Id }).exec();
  }

  async updateAccountUser(accountUser: AccountUser): Promise<AccountUser> {
    const { Id, ...updatedData } = accountUser;
    return this.accountUserModel
      .findOneAndUpdate({ Id }, updatedData, { new: true })
      .exec();
  }
}
