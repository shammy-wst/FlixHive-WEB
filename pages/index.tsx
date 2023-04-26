import Navbar from "@/pages/components/Navbar";
import axios from "axios";
import {server} from "@/config/index";

import Billboard from "@/pages/components/Billboard";
import MovieList from "@/pages/components/Movie/MovieList";

import Search from "@/pages/components/Search";


export default function Home({movies}){
    console.log(movies);
    return (
        <div>
            <Navbar/>
            <Billboard/>
            <MovieList/>



        </div>
    )
}


