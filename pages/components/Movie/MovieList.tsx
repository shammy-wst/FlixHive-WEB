import React, {useEffect, useState} from "react";
import MovieCard from "@/pages/components/Movie/MovieCard";
import tmdb from "@/pages/api/tmdb";
import Search from "@/pages/components/Search";

const MovieList = () => {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const {data} = await tmdb.get(`/movie/popular`)
            setMovies(data.results)
        }
        fetchMovies()
    } ,[])
    return (
        <div className={"relative"}>
            <h1 className={"text-white text-2xl m-5 px-5"}>Les plus populaire</h1>
            <div className={"flex pb-5 px-5 overflow-x-auto"}>
                {movies.map((movie,index) =>{
                    return <MovieCard key={index} {...movie}/>
                })}
                )</div>
        </div>
    )
}

export default MovieList;