import { Document } from 'mongoose';

export interface RoleManagement extends Document {
  readonly _Name: String;
  readonly Nickname: String;
  readonly Email: String;
  readonly Password: String;
  readonly Gender: Boolean;
  readonly Birth: Date;
  readonly Country: String;
  readonly Contract_Type: String;
  readonly _Contract: String;
  readonly _Start_Date: Date;
  readonly Registration_Date: Date;
  readonly Authority_Type: String;
  readonly _Image: String;
}
