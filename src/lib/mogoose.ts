import mongoose from "mongoose";

let isConnected: boolean = false;

const connectToDatabase = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not set");
    }

    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "SideProject",
        });
        isConnected = true;
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to database");
        console.error(error);
    }
};

export default connectToDatabase;
