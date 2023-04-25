const getPosterURL =(posterpath) => {
    return (
        `https://image.tmdb.org/t/p/w500/${posterpath}`
    )
}
const MovieCard = ({poster_path,title,release_date}) => {
    return (
    <div className={"flex flex-col pl-5 gap-2"}>
        <img src={getPosterURL(poster_path)} alt={title} className={"w-[150px] h-[225px] shadow-sm rounded-md"}/>
        <div className={"flex flex-col px-3 w-[150px]"}>
            <h1 className={"font-bold text-white"}>{title}</h1>
            <p className={"font-normal text-white"}>{release_date}</p>

        </div>

    </div>
    )
}


export default MovieCard;