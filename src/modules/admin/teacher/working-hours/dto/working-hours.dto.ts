export class WorkingHoursDto {
  readonly Teacher_Name: string;
  readonly Teacher_Nickname: string;
  readonly Team: string;
  readonly Team_Leader: string;
  readonly schedule: {
    Mon: {
      startTime: string;
      endTime: string;
    }[];
    Tue: {
      startTime: string;
      endTime: string;
    }[];
    Wed: {
      startTime: string;
      endTime: string;
    }[];
    Thu: {
      startTime: string;
      endTime: string;
    }[];
    Fri: {
      startTime: string;
      endTime: string;
    }[];
    Sat: {
      startTime: string;
      endTime: string;
    }[];
    Sun: {
      startTime: string;
      endTime: string;
    }[];
  };
}
