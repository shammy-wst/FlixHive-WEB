import Image from "next/image";
import {Movie} from "@/typings";
import {useEffect, useState} from "react";
import {baseUrl} from "@/Const/movie";
import {FaPlay,} from "react-icons/fa";
import {IoInformationCircle} from "react-icons/io5";
interface Props {
    netflixOriginals: Movie[]
}
const Billboard = ({netflixOriginals}: Props) => {
    const [movie,setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    } , [netflixOriginals])

    console.log(movie)
    return (
        <div className={"flex flex-col space-y-2 py-16 md:space-y-4 lg: h-[65vh] lg:justify-end lg:pb-12"}>
          <div className={"absolute top-0 left-0 -z-10 h-[95vh] w-screen"}>
              <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout={"fill"} objectFit={"cover"} alt={"billboard banner"}/>
          </div>
            <h1 className={"text-2xl lg:text-7xl text-white md:text-4xl font-bold"}>{movie?.title || movie?.name || movie?.original_name}</h1>
            <p className={"text-shadow-md max-w-xs text-xs text-white md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl"}>{movie?.overview}</p>

            <div className={"flex space-x-3"}>
                <button className={"bannerButton bg-[#FF9000] text-black"}><FaPlay className={"h-4 w-4 text-black md:w-7 md:h-7"}/> Play</button>
                <button className={"bannerButton bg-[gray]/70"}> En savoir plus <IoInformationCircle className={"h-5 w-5 md:h-8 md:w-8 text-white"}/></button>
            </div>
        </div>

    )
}
export default Billboard