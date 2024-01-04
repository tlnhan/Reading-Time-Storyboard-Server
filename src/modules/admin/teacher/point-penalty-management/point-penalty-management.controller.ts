import { Controller, Get, Body, Post } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { PointPenaltyManagement } from './interface/point-penalty-management.interface';
import { PointPenaltyManagementService } from './point-penalty-management.service';
import { PointPenaltyManagementDto } from './dto/point-penalty-management.dto';

@Controller('point-penalty')
export class PointPenaltyManagementController {
  constructor(
    private readonly pointPenaltyManagementService: PointPenaltyManagementService,
  ) {}

  @Get()
  async getPointPenaltyManagement(): Promise<
    ResponseData<PointPenaltyManagement[]>
  > {
    try {
      const data =
        await this.pointPenaltyManagementService.getPointPenaltyManagement();
      return new ResponseData<PointPenaltyManagement[]>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<PointPenaltyManagement[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  async createPointPenaltyManagement(
    @Body() pointPenaltyManagementDto: PointPenaltyManagementDto,
  ): Promise<ResponseData<PointPenaltyManagement>> {
    try {
      const data =
        await this.pointPenaltyManagementService.createPointPenaltyManagement(
          pointPenaltyManagementDto,
        );
      return new ResponseData<PointPenaltyManagement>(
        data,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<PointPenaltyManagement>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
