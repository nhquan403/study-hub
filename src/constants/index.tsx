import IconComment from "@/components/icons/IconComment";
import IconCourse from "@/components/icons/IconCourse";
import IconExplore from "@/components/icons/IconExplore";
import IconMember from "@/components/icons/IconMember";
import IconOrder from "@/components/icons/IconOrder";
import IconPlay from "@/components/icons/IconPlay";
import { SideBarItem } from "@/types";

export const courseList: SideBarItem[] = [
    {
        title: "Khám phá",
        path: "/",
        icon: <IconExplore className="size-5" />,
    },
    {
        title: "Khu vực học tập",
        path: "/study",
        icon: <IconPlay className="size-5" />,
    },
    {
        title: "Quản lý khóa học",
        path: "/course",
        icon: <IconCourse className="size-5" />,
    },
    {
        title: "Quản lý thành viên",
        path: "/member",
        icon: <IconMember className="size-5" />,
    },
    {
        title: "Quản lý đơn hàng",
        path: "/order",
        icon: <IconOrder className="size-5" />,
    },
    {
        title: "Quản lý bình luận",
        path: "/comment",
        icon: <IconComment className="size-5" />,
    },
];
