import { Document } from "mongoose";

export interface HolidayManagement extends Document {
    readonly _Name: string;
    readonly _Start_Date: Date;
    readonly End_Date: Date;
    readonly Annual_Repeat: Boolean;
    readonly Usage_Status: Boolean;
    readonly Registration_Date: Date;
    readonly Country: String;
}