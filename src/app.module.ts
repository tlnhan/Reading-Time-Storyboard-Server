import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { WebSettingsModule } from './modules/admin/settings/web-setting-management/web-settings/web-settings.module';
import { SMTPSecurityModule } from './modules/admin/settings/smtp-security/smtp-security.module';
import { MailSettingsModule } from './modules/admin/settings/web-setting-management/mail-settings/mail-settings.module';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOOSE_URL),
    WebSettingsModule,
    SMTPSecurityModule,
    MailSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
