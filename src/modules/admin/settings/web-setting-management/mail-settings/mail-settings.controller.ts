import { Body, Controller, Get, Put } from '@nestjs/common';
import { MailSettingsService } from './mail-settings.service';
import { ResponseData } from 'src/global/globalClass';
import { MailSettings } from './interface/mail-settings.interface';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('mail-settings')
export class MailSettingsController {
  constructor(private readonly mailSettingsService: MailSettingsService) {}

  @Get()
  async getMailSettings(): Promise<ResponseData<MailSettings[]>> {
    try {
      const data = await this.mailSettingsService.getMailSettings();
      return new ResponseData<MailSettings[]>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<MailSettings[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put()
  async updateMailSettings(
    @Body() mailSettings: MailSettings,
  ): Promise<ResponseData<MailSettings>> {
    try {
      const data =
        await this.mailSettingsService.updateMailSettings(mailSettings);
      return new ResponseData<MailSettings>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<MailSettings>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
