//get sessões https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes
import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import Session from "./Session";
import { Link, useParams } from "react-router-dom";

function Sessions(){
        const [sessions, setSessions] = useState([]);
        const {movieId} = useParams();
        console.log(movieId);

        useEffect(()=>{
                const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);

                request.then(res =>{ 
                        setSessions(res.data.days)});

                request.catch((error)=> console.log(error.res.data));
        }, []);


        return(
                <>
                        <Title>Selecione o horário</Title>
                        {sessions.map((day) => (
                        <SessionBox key={day.id}>
                                <Session
                                weekday={day.weekday}
                                date={day.date}
                                showtimes={day.showtimes}/>
                        </SessionBox>
                ))}
                </>
        )
}

//---------------------------------STYLES---------------------------------

const SessionBox = styled.div`
        font-family: Sarala;
        background-color: #2B2D36;
        border-radius: 8px;
        margin: 30px;
`


const Title = styled.div`
font-family: "Sarala", sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 90px;
  font-size: 24px ;
  font-weight: 500;
`;


export default Sessions;