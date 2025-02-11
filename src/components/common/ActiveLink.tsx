"use client";
import { IActiveLink } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = (props: IActiveLink) => {
    const pathname = usePathname();
    const isActive = pathname === props.url;

    return (
        <Link
            href={props.url}
            className={`p-4 rounded-lg flex dark:text-grayDark items-center gap-3 ${
                isActive
                    ? "!text-primary !bg-primary !bg-opacity-10 icon-animated"
                    : "hover:!text-primary hover:!bg-primary hover:!bg-opacity-10 !transition-all"
            }`}
        >
            {props.children}
        </Link>
    );
};

export default ActiveLink;
