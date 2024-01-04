import { CustomerServicePCModule } from './modules/admin/settings/web-setting-management/customer-service-pc/customer-service-pc.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { WebSettingsModule } from './modules/admin/settings/web-setting-management/web-settings/web-settings.module';
import { SMTPSecurityModule } from './modules/admin/settings/smtp-security/smtp-security.module';
import { MailSettingsModule } from './modules/admin/settings/web-setting-management/mail-settings/mail-settings.module';
import { AccountUserModule } from './modules/admin/account-user/account-user.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { TermsOfUseModule } from './modules/admin/settings/terms-management/terms-of-use/terms-of-use.module';
import { PrivacyPolicyModule } from './modules/admin/settings/terms-management/privacy-policy/privacy-policy.module';
import { CountryModule } from './modules/country/country.module';
import { PaymentAndRefundPolicyModule } from './modules/admin/settings/terms-management/payment-and-refund-policy/payment-and-refund-policy.module';
import { PromotionTermsAndConditionsModule } from './modules/admin/settings/terms-management/promotion-terms-and-conditions/promotion-terms-and-conditions.module';
import { AdminSettingsModule } from './modules/admin/settings/web-setting-management/admin-settings/admin-settings.module';
import { MainMenuPCModule } from './modules/admin/settings/web-setting-management/main-menu-pc/main-menu-pc.module';
import { MainMenuMobileModule } from './modules/admin/settings/web-setting-management/main-menu-mobile/main-menu-mobile.module';
import { CustomerServiceMobileModule } from './modules/admin/settings/web-setting-management/customer-service-mobile/customer-service-mobile.module';
import { MainPageProductPCModule } from './modules/admin/settings/web-setting-management/main-page-product-pc/main-page-product-pc.module';
import { MainPageProductMobileModule } from './modules/admin/settings/web-setting-management/main-page-product-mobile/main-page-product-mobile.module';
import { SMSSettingsModule } from './modules/admin/settings/web-setting-management/sms-settings/sms-settings.module';
import { HolidayManagementModule } from './modules/admin/settings/web-setting-management/holiday-management/holiday-management.module';
import { MenuPermissionManagementModule } from './modules/admin/settings/web-setting-management/menu-permission-management/menu-permission-management.module';
import { RoleManagementModule } from './modules/admin/role-management/role-management.module';
import { AccountTeacherModule } from './modules/admin/teacher/account-teacher/account-teacher.module';
import { WorkingHoursModule } from './modules/admin/teacher/working-hours/working-hours.module';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOOSE_URL),
    WebSettingsModule,
    SMTPSecurityModule,
    MailSettingsModule,
    AccountUserModule,
    AuthenticationModule,
    TermsOfUseModule,
    PrivacyPolicyModule,
    CountryModule,
    PaymentAndRefundPolicyModule,
    PromotionTermsAndConditionsModule,
    AdminSettingsModule,
    MainMenuPCModule,
    MainMenuMobileModule,
    CustomerServicePCModule,
    CustomerServiceMobileModule,
    MainPageProductPCModule,
    MainPageProductMobileModule,
    SMSSettingsModule,
    HolidayManagementModule,
    MenuPermissionManagementModule,
    RoleManagementModule,
    AccountTeacherModule,
    WorkingHoursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
