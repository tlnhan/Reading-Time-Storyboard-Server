import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { WebSettingsModule } from './modules/settings/web-setting-management/web-settings/web-settings.module';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOOSE_URL),
    WebSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
