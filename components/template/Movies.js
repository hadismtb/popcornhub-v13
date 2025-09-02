function Movies({data = []}) {
    return (
        <div>Movies list
            {data.map(movie => <div key={movie.id}><img
                src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}/>{movie.title}</div>)}
        </div>
    );
}

export default Movies;