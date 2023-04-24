import Auth from "@/pages/Auth";
import axios from "axios";
import {server} from "@/config/index";

export default function Home({movies}){
  console.log(movies);
  return (
      <Auth/>
  )
}
export async function getStaticProps (){
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=1`)
  const movies = res.data
  return {
    props: {movies},
  }
}