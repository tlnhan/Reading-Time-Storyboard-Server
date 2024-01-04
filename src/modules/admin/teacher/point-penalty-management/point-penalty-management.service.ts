import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PointPenaltyManagement } from './interface/point-penalty-management.interface';
import { PointPenaltyManagementDto } from './dto/point-penalty-management.dto';

@Injectable()
export class PointPenaltyManagementService {
  constructor(
    @InjectModel('PointPenaltyManagement')
    private readonly pointPenaltyManagementModel: Model<PointPenaltyManagement>,
  ) {}

  async getPointPenaltyManagement(): Promise<PointPenaltyManagement[]> {
    return this.pointPenaltyManagementModel.find().exec();
  }

  async createPointPenaltyManagement(
    pointPenaltyManagementDto: PointPenaltyManagementDto,
  ): Promise<PointPenaltyManagement> {
    const createdPointPenaltyManagement = new this.pointPenaltyManagementModel(
      pointPenaltyManagementDto,
    );
    return createdPointPenaltyManagement.save();
  }
}
