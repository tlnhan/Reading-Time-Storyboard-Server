import { Document } from 'mongoose';

export interface WorkingHours extends Document {
  readonly Teacher_Name: string;
  readonly Teacher_Nickname: string;
  readonly Team: string;
  readonly Team_Leader: string;
  readonly schedule: {
    time: Date;
    Mon: boolean;
    Tue: boolean;
    Wed: boolean;
    Thu: boolean;
    Fri: boolean;
    Sat: boolean;
    Sun: boolean;
  }[];
}
