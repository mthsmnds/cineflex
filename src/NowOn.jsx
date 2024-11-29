//get  filmes https://mock-api.driven.com.br/api/v8/cineflex/movies
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

function NowOn(){
        const [movies, setMovies] = useState([]);

        useEffect(() =>{
                const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        request.then(res =>{
                setMovies(res.data.movies);
        });
}, []);

if(movies === null){
        return(
                <p>Loading...</p>
        );
}

        return(
                <ul>
                        {movies.map(movie =>(
                                 <Movie key={movie.id} title={movie.title} poster={movie.posterURL} overview={movie.overview}> </Movie>))}
                </ul>
        );
}

export default NowOn;
