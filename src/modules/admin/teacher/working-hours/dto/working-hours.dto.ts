export class WorkingHoursDto {
  readonly Teacher_Name: string;
  readonly Teacher_Nickname: string;
  readonly Team: string;
  readonly Team_Leader: string;
  readonly schedule: {
    time: string;
    Mon: boolean;
    Tue: boolean;
    Wed: boolean;
    Thu: boolean;
    Fri: boolean;
    Sat: boolean;
    Sun: boolean;
  }[];
}
