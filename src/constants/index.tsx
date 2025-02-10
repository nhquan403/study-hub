import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";
import { SideBarItem } from "@/types";

export const courseList: SideBarItem[] = [
    {
        title: "Khu vực học tập",
        path: "/",
        icon: <IconPlay className="size-5" />,
    },
    {
        title: "Khám phá",
        path: "/explore",
        icon: <IconExplore className="size-5" />,
    },
];
