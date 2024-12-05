import React from "react";
import styled from "styled-components";

function Movie(props){
        return(
                <Poster>
                        <Image  src={props.posterURL}/>
                        <Title>{props.title}</Title>
                </Poster>
        );

}

//---------------------STYLES--------------------

const Poster = styled.div`
        margin: 10px;
        position: relative;
        z-index: 0;


        &:hover p{
                opacity: 1;
        }

        &:hover img{
         filter: brightness(0.5); 
         transition: filter 0.3s ease
        }

`

const Image = styled.img`

                max-width: 146px;
                max-height: 210px;
                border-radius: 8px;
        
`
const Title = styled.p`
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 18px;
        font-weight: 600;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 1);
        text-align: center;
        width: 100%;
        padding: 10px;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none; 
        
`

export default Movie;
