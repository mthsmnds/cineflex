//get  filmes https://mock-api.driven.com.br/api/v8/cineflex/movies
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
                <div>Loading...</div>
        );
}

        return(
                <>
                <Title>Em Cartaz</Title>
                <Wrapper>
                        {movies.map(movie =>(
                                 <Linker key={movie.id} to ={`/sessoes/${movie.id}`}>
                                 <Movie key={movie.id} 
                                 title={movie.title} 
                                 posterURL={movie.posterURL} > 
                                 </Movie>
                                 </Linker>))}
                </Wrapper>
                </>
        );
}

const Wrapper = styled.ul`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 20px;
        `

const Linker = styled(Link)`
`
const Title = styled.div`
font-family: "Sarala", sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 90px;
  font-size: 24px ;
  font-weight: 500;
`;

export default NowOn;

