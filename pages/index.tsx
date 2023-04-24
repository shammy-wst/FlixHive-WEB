import Navbar from "@/pages/components/Navbar";
import axios from "axios";
import {server} from "@/config/index";
import PopularMovie from "@/pages/components/PopularMovie";
import Billboard from "@/pages/components/Billboard";


export default function Home({movies}){
  console.log(movies);
  return (
      <div>
      <Navbar/>
      <Billboard/>
      <PopularMovie movies={movies.results}/>;
    </div>
)
}
export async function getStaticProps (){
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=1`)
  const movies = res.data
  return {
    props: {movies},
  }
}

