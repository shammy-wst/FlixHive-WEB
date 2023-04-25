import Image from "next/image";

const Billboard = () => {
    return (
        <div id={"bill"} className={"rh-18 rounded-md"}>
            <Image src={"https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg"}  alt={"Billboard"} width={2560} height={900} />
        </div>

    )
}
export default Billboard