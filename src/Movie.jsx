import React from "react";
import styled from "styled-components";

function Movie(props){
        return(
                <MovieBox>
                        <img src={props.posterURL}/>
                </MovieBox>
        );

}

const MovieBox = styled.div`
        
`

export default Movie;