import User, { IUser } from "@/database/user.model";
import connectToDatabase from "@/lib/mogoose";
import { ICreateUserParams } from "@/types";

export async function createUser(params: ICreateUserParams): Promise<IUser> {
    try {
        connectToDatabase();
        const user = await User.create(params);
        console.log("0x01 user", user);
        return user;
    } catch (e) {
        console.log(e);
        throw new Error("Error creating user");
    }
}
