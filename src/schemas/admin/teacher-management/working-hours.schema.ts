import * as mongoose from 'mongoose';

export const WorkingHoursSchema = new mongoose.Schema(
  {
    Teacher_Name: String,
    Teacher_Nickname: String,
    Team: String,
    Team_Leader: String,
    schedule: {
      Mon: [
        {
          startTime: String,
          endTime: String,
        },
      ],
      Tue: [
        {
          startTime: String,
          endTime: String,
        },
      ],
      Wed: [
        {
          startTime: String,
          endTime: String,
        },
      ],
      Thu: [
        {
          startTime: String,
          endTime: String,
        },
      ],
      Fri: [
        {
          startTime: String,
          endTime: String,
        },
      ],
      Sat: [
        {
          startTime: String,
          endTime: String,
        },
      ],
      Sun: [
        {
          startTime: String,
          endTime: String,
        },
      ],
    },
  },
  { timestamps: true },
);
