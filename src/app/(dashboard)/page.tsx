import CourseList from "@/components/common/CourseList";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";

const page = () => {
    return (
        <>
            <Heading>Khám phá</Heading>
            <CourseList>
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </CourseList>
        </>
    );
};

export default page;
