import IconChart from "@/components/icons/IconChart";
import IconClock from "@/components/icons/IconClock";
import IconStar from "@/components/icons/IconStar";
import Image from "next/image";
import Link from "next/link";

const CourseItem = () => {
    const infoCourses = [
        {
            title: "Dễ",
            icon: (className: string) => <IconChart className={className} />,
        },
        {
            title: "5.0",
            icon: (className: string) => <IconStar className={className} />,
        },

        {
            title: "3h21p",
            icon: (className: string) => <IconClock className={className} />,
        },
    ];

    return (
        <Link
            href="#"
            className="p-4 rounded-2xl border border-gray-200 bg-white dark:bg-grayDarker dark:border-gray-100"
        >
            <div className="h-[180px] relative">
                <Image
                    height={360}
                    width={720}
                    alt="course-item"
                    sizes="@media (min-width: 640px) 300px, 100vw"
                    priority
                    className="w-full h-full object-cover rounded-lg"
                    src="https://plus.unsplash.com/premium_photo-1739095638086-f86a16d1a076?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                />
                <span className="absolute right-3 top-3 rounded-lg text-sm text-white bg-green-500 py-1 px-3">
                    New
                </span>
            </div>
            <div className="pt-4">
                <h3 className="font-bold text-xl">
                    Khóa học NextJS - Xây dựng E-learning hoàn thiện
                </h3>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-3">
                        {infoCourses.map((info) => (
                            <div
                                className="flex items-center gap-1 text-gray-500 text-sm dark:text-grayDark"
                                key={Math.random().toString()}
                            >
                                {info.icon("size-4")}
                                <span>{info.title}</span>
                            </div>
                        ))}
                    </div>
                    <span className="text-primary font-semibold">799.000đ</span>
                </div>
            </div>
            <span className="w-full flex items-center justify-center h-10 mt-4 bg-primary text-white rounded-md">
                Xem chi tiết
            </span>
        </Link>
    );
};

export default CourseItem;
