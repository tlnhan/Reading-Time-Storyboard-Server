import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SMSSettings } from './interface/sms-settings.interface';

@Injectable()
export class SMSSettingsService {
  constructor(
    @InjectModel('SMSSettings')
    private readonly smsSettingsModel: Model<SMSSettings>,
  ) {}

  async getSMSSettings(): Promise<SMSSettings[]> {
    return this.smsSettingsModel.find().exec();
  }

  async updateSMSSettings(smsSettings: SMSSettings): Promise<SMSSettings> {
    const { Id, ...updatedData } = smsSettings;
    return this.smsSettingsModel
      .findOneAndUpdate({ Id }, updatedData, { new: true })
      .exec();
  }
}
