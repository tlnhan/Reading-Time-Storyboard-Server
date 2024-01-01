import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailSettings } from './interface/mail-settings.interface';

@Injectable()
export class MailSettingsService {
  constructor(
    @InjectModel('MailSettings')
    private readonly mailSettingsModel: Model<MailSettings>,
  ) {}

  async getMailSettings(): Promise<MailSettings[]> {
    return this.mailSettingsModel.find().exec();
  }

  async updateMailSettings(mailSettings: MailSettings): Promise<MailSettings> {
    const { Id, ...updateData } = mailSettings;
    return this.mailSettingsModel
      .findOneAndUpdate({ Id }, updateData, { new: true })
      .exec();
  }
}
