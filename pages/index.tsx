import Navbar from "@/pages/components/Navbar";
import axios from "axios";
import Head from "next/head";
import Billboard from "@/pages/components/Billboard";
import MovieList from "@/pages/components/Movie/MovieList";
import req from "@/Fetch/req";
import {Movie} from "@/typings";
import movieList from "@/pages/components/Movie/MovieList";

interface Props {
    netflixOriginals: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
}
const Home = ({ netflixOriginals,
                  actionMovies,
                  comedyMovies,
                  documentaries,
                  horrorMovies,
                  romanceMovies,
                  topRated,
                  trendingNow, }: Props) => {
    console.log(netflixOriginals)
    return (
        <div>
            <Head>
                <title>FlixHive</title>
                <link rel="icon" href="/Favicon.png"/>
            </Head>
            <Navbar/>
            <main className={"relative pl-4 pb-24 lg:space-y-24 lg:pl-16"}>
                <Billboard netflixOriginals ={netflixOriginals}/>
                <section>
                    <MovieList title="Trending Now" movies={trendingNow} />
                    <MovieList title="Top Rated" movies={topRated} />
                    <MovieList title="Action Thrillers" movies={actionMovies} />
                        {/* Ma liste */}
                    <MovieList title="Comedies" movies={comedyMovies} />
                    <MovieList title="Scary Movies" movies={horrorMovies} />
                    <MovieList title="Romance Movies" movies={romanceMovies} />
                    <MovieList title="Documentaries" movies={documentaries} />
                </section>
            </main>
        </div>
    )
}

export default Home;
export const getServerSideProps = async () => {
    const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
        //     le promise.all est ici pour utiliser juste un seul Await
    ] = await Promise.all([
        fetch(req.fetchNetflixOriginals).then((res) => res.json()),
        fetch(req.fetchTrending).then((res) => res.json()),
        fetch(req.fetchTopRated).then((res) => res.json()),
        fetch(req.fetchActionMovies).then((res) => res.json()),
        fetch(req.fetchComedyMovies).then((res) => res.json()),
        fetch(req.fetchHorrorMovies).then((res) => res.json()),
        fetch(req.fetchRomanceMovies).then((res) => res.json()),
        fetch(req.fetchDocumentaries).then((res) => res.json()),
    ])
    return {
        props: {
            netflixOriginals: netflixOriginals.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results,
        }
    }
}


