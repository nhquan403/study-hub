import ActiveLink from "@/components/common/ActiveLink";
import { courseList } from "@/constants";
import { SideBarItem } from "@/types";

const SideBar = () => {
    return (
        <aside className="sidebar p-5 border-r border-r-gray-200 h-screen">
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
