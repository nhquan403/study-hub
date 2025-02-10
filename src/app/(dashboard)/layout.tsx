import SideBar from "@/components/layout/SideBar";
import { manrope } from "@/utils";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={`${manrope.variable} grid grid-cols-[300px_minmax(900px,_1fr)]`}
        >
            <SideBar />
            <main>{children}</main>
        </div>
    );
};

export default layout;
