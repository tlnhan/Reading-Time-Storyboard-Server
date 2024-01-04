import { Controller, Get } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { ClassFeedback } from './interface/class-feedback.interface';
import { ClassFeedbackService } from './class-feedback.service';

@Controller('class-feedback')
export class ClassFeedbackController {
  constructor(private readonly classFeedbackService: ClassFeedbackService) {}

  @Get()
  async getClassFeedback(): Promise<ResponseData<ClassFeedback[]>> {
    try {
      const data = await this.classFeedbackService.getClassFeedback();
      return new ResponseData<ClassFeedback[]>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<ClassFeedback[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
