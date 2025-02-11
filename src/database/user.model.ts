import { EUserRoles, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    avatar: string;
    course: Schema.Types.ObjectId[];
    status: EUserStatus;
    role: EUserRoles;
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    clerkId: { type: String },
    name: { type: String },
    username: { type: String, unique: true, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now },
    course: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    status: {
        type: String,
        enum: Object.values(EUserStatus),
        default: EUserStatus.ACTIVE,
    },
    role: {
        type: String,
        enum: Object.values(EUserRoles),
        default: EUserRoles.USER,
    },
});

const User = models.User || model<IUser>("User", userSchema);
export default User;
