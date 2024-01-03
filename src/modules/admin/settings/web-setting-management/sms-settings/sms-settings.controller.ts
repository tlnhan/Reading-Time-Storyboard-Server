import { Controller, Get, Put, Body } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { SMSSettings } from './interface/sms-settings.interface';
import { SMSSettingsService } from './sms-settings.service';

@Controller('sms-settings')
export class SMSSettingsController {
  constructor(private readonly smsSettingsService: SMSSettingsService) {}

  @Get()
  async getSMSSettings(): Promise<ResponseData<SMSSettings[]>> {
    try {
      const data = await this.smsSettingsService.getSMSSettings();
      return new ResponseData<SMSSettings[]>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<SMSSettings[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put()
  async updateSMSSettings(
    @Body() smsSettings: SMSSettings,
  ): Promise<ResponseData<SMSSettings>> {
    try {
      const data = await this.smsSettingsService.updateSMSSettings(smsSettings);
      return new ResponseData<SMSSettings>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<SMSSettings>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
