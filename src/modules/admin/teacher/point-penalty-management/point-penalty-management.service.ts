import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PointPenaltyManagement } from './interface/point-penalty-management.interface';
import { PointPenaltyManagementDto } from './dto/point-penalty-management.dto';
// import { ClassFeedback } from '../class-feedback/interface/class-feedback.interface';

@Injectable()
export class PointPenaltyManagementService {
  constructor(
    // @InjectModel('ClassFeedback')
    // private readonly classFeedbackModel: Model<ClassFeedback>,
    @InjectModel('PointPenaltyManagement')
    private readonly pointPenaltyManagementModel: Model<PointPenaltyManagement>,
  ) {}

  async getPointPenaltyManagement(
    Teacher_Name: string,
  ): Promise<PointPenaltyManagement[]> {
    return this.pointPenaltyManagementModel
      .find({ Teacher_Name: Teacher_Name })
      .exec();
  }

  // async getPointsAndPenaltiesInMonth(
  //   month: number,
  //   year: number,
  // ): Promise<any> {
  //   const startDate = new Date(year, month - 1, 1);
  //   const endDate = new Date(year, month, 0);

  //   const pointPromises = this.classFeedbackModel
  //     .find({
  //       Class_Datetime: { $gte: startDate, $lte: endDate },
  //       Score: { $gt: 0 },
  //     })
  //     .select('Teacher_Name Team_Name Class_Datetime Comment Score')
  //     .exec();

  //   const penaltyPromises = this.classFeedbackModel
  //     .find({
  //       createdAt: { $gte: startDate, $lte: endDate },
  //       Score: { $lt: 0 },
  //     })
  //     .select(
  //       'Teacher_Name Team_Name Class_Datetime Comment Score Division Items Texts',
  //     )
  //     .exec();

  //   const [points, penalties] = await Promise.all([
  //     pointPromises,
  //     penaltyPromises,
  //   ]);

  //   const result = {
  //     points: points.map((point) => ({
  //       teacherName: point.Teacher_Name,
  //       team: point.Team_Name,
  //       time: point.Class_Datetime,
  //       comment: point.Teacher_Comment,
  //       score: point.Score,
  //     })),
  //     penalties: penalties.map((penalty) => ({
  //       teacherName: penalty.Teacher_Name,
  //       team: penalty.Team_Name,
  //       time: penalty.Class_Datetime,
  //       comment: penalty.Teacher_Comment,
  //       score: penalty.Score,
  //     })),
  //   };

  //   return result;
  // }

  async createPointPenaltyManagement(
    pointPenaltyManagementDto: PointPenaltyManagementDto,
  ): Promise<PointPenaltyManagement> {
    const createdPointPenaltyManagement = new this.pointPenaltyManagementModel(
      pointPenaltyManagementDto,
    );
    return createdPointPenaltyManagement.save();
  }
}
