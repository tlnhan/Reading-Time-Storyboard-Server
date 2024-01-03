import { Document } from "mongoose";

export interface MenuPermissionManagement extends Document {
    readonly Role: String;
    readonly Slug: String;
    readonly Apply: Boolean;
}