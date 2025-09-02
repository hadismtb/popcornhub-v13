import Movies from "@/components/template/Movies";

function Index({movies}) {
    return (
        <Movies data={movies}/>
    );
}

export default Index;

export async function getStaticProps() {
    // const api = "4b5408f5"
    // const res = await fetch(`http://www.omdbapi.com/?apikey=${api}&plot=short`);
    //
    // const data = await res.json();
    const tmdbApiKey = "77b1076b374cadfe32a0bf48151961ed";
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}`);
    const data = await res.json();
    console.log(data);
    return {
        props: {movies: data?.results}
    }
}