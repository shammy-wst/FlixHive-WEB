import React from "react";
import Image from "next/image";

const Billboard = () => {
    return (
        <div className={"relative h-[56.25vw] "}>
            <div className={"bg-black w-full h-full lg:bg-opacity-50"} >
            <Image src={"https://image.tmdb.org/t/p/w500/h8gHn0OzBoaefsYseUByqsmEDMY.jpg"} alt={"Billboard"} width={2560} height={600}  />
            </div>
        </div>
    )
}

export default Billboard