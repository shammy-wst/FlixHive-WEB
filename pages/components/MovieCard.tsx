import Image from "next/image";
const MovieCard = ({movie}) => {
    return (
        <div className={"bg-white shadow-sm rounded-lg cursor-pointer object-cover"}>
           <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={"posterpopular"} width={1200} height={800} className={"rounded-t-lg "}/>
            <div className={"px-6 py-2"}>
                <div className={"text-gray-700 text-base mb-1"}>{movie.title}</div>
                <p className={"text-gray-700 text-base mb-1"}>{movie.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;