import { Controller, Get, Put, Body, Post } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { AccountTeacher } from './interface/account-teacher.interface';
import { AccountTeacherService } from './account-teacher.service';
import { AccountTeacherDto } from './dto/account-teacher.dto';

@Controller('account-teacher')
export class AccountTeacherController {
  constructor(private readonly accountTeacherService: AccountTeacherService) {}

  @Get()
  async getAccountTeacher(): Promise<ResponseData<AccountTeacher[]>> {
    try {
      const data = await this.accountTeacherService.getAccountTeacher();
      return new ResponseData<AccountTeacher[]>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<AccountTeacher[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get('detail')
  async getAccountTeacher_id(
    @Body() _id: string,
  ): Promise<ResponseData<AccountTeacher>> {
    try {
      const data = await this.accountTeacherService.getAccountTeacherId(_id);
      return new ResponseData<AccountTeacher>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<AccountTeacher>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put()
  async updateAccountTeacher(
    @Body() accountTeacher: AccountTeacher,
  ): Promise<ResponseData<AccountTeacher>> {
    try {
      const data =
        await this.accountTeacherService.updateAccountTeacher(accountTeacher);
      return new ResponseData<AccountTeacher>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<AccountTeacher>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  async createAccountTeacher(
    @Body() accountTeacherDto: AccountTeacherDto,
  ): Promise<ResponseData<AccountTeacher>> {
    try {
      const data =
        await this.accountTeacherService.createAccountTeacher(
          accountTeacherDto,
        );
      return new ResponseData<AccountTeacher>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<AccountTeacher>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
