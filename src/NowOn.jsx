//get  filmes https://mock-api.driven.com.br/api/v8/cineflex/movies
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";

function NowOn(){
        const [movies, setMovies] = useState([]);

        useEffect(() =>{
                const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        request.then(res =>{
                setMovies(res.data);
        });

        request.catch((error) => console.log(error.res.data));
}, []);


if(movies === 0){
        return(
                <p>Loading...</p>
        );
}

        return(
                <Wrapper>
                        {movies.map(movie =>(
                                 <Movie key={movie.id} 
                                 title={movie.title} 
                                 posterURL={movie.posterURL} > 
                                 </Movie>))}
                </Wrapper>
        );
}

const Wrapper = styled.ul`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 20px;
        `

export default NowOn;

