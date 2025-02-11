import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ManageLayout = async ({ children }: { children: React.ReactNode }) => {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return <>{children}</>;
};

export default ManageLayout;
