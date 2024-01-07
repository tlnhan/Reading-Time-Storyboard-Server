import * as mongoose from 'mongoose';

export const AccountTeacherSchema = new mongoose.Schema(
  {
    Teacher_Name: String,
    Nick_Name: String,
    Email: String,
    Password: String,
    Gender: Boolean,
    Birth: Date,
    Country: String,
    Time_Zone: String,
    Contract_Type: String,
    Contract: String,
    Start_Date: String,
    Resignation_Day: Date,
    Career: String,
    Description_Career: String,
    Certificate: [String],
    Resume: String,
    Image: String,
    Working_Hours: String,
    Team_Name: String,
    Status: [String],
    Level: [String],
    Special_Feature: [String],
    Self_Introduction: String,
    Recommended_Student: [String],
    Recommended_Level: [String],
    Character: [String],
    Lession_Style: [String],
    Video: String,
    Student_Review: [String],
    Comment: [String],
  },
  { timestamps: true },
);
