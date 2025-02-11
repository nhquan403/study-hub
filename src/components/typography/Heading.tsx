import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
    return <h1 className="font-bold text-3xl mb-5">{children}</h1>;
};

export default Heading;
