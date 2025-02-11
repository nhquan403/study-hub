import ActiveLink from "@/components/common/ActiveLink";
import { ModeToggle } from "@/components/common/ModeToggle";
import { courseList } from "@/constants";
import { SideBarItem } from "@/types";
import { UserButton } from "@clerk/nextjs";

const SideBar = () => {
    return (
        <aside className="sidebar p-5 border-r border-r-gray-200 bg-white h-screen flex flex-col dark:bg-grayDarker dark:border-opacity-10">
            <div className="icon font-bold text-3xl mb-5">
                <span className="text-primary">S</span>
                tudyHub
            </div>
            <ul className="space-y-2">
                {courseList.map((course) => (
                    <SideBarItemComponent
                        key={Math.random().toString()}
                        {...course}
                    />
                ))}
            </ul>
            <div className="mt-auto flex justify-end gap-3">
                <ModeToggle />
                <UserButton />
            </div>
        </aside>
    );
};

const SideBarItemComponent = (props: SideBarItem) => {
    return (
        <li>
            <ActiveLink url={props.path}>
                {props.icon}
                {props.title}
            </ActiveLink>
        </li>
    );
};

export default SideBar;
