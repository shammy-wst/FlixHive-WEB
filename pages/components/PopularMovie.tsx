import MovieCard from "@/pages/components/MovieCard";
import Image from "next/image";
const PopularMovie =({movies}) =>{
return(
    <div className={"flex flex-row flex-wrap bg-zinc-900 w-full object-cover max-w-7xl mx-auto pb-10 px-4"}>
        <h1 className={"text-white text-2xl mt-8 mb-5"}>What's Popular</h1>
        <div className={"grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"}>
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>

    </div>
)
}
export default PopularMovie;