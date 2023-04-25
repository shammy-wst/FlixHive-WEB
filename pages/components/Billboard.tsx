import Image from "next/image";

const Billboard = ({movies}) => {
    return (
        <div className={"rh-18 "}>
            <Image src={"https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg"} alt={"Billboard"} width={2560} height={200}/>
            <div>{movies}</div>
        </div>

    )
}
export default Billboard