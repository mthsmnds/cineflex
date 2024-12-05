//get sessões https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes
import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import Session from "./Session";
import { useParams } from "react-router-dom";

function Sessions(){
        const [sessions, setSessions] = useState([]);

        const {movieId} = useParams();
        console.log(movieId);

        useEffect(()=>{
                const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);

                request.then(res =>{ 
                        console.log("API RESPONSE: ", res.data)
                        setSessions(res.data.days)});

                request.catch((error)=> console.log(error.res.data));
        }, []);


        if(sessions === 0){
                return(
                        <div>Loading...</div>
                );
        }

        return(
                <>
                        {sessions.map(session =>(
                        <SessionBox>
                                <Session 
                                key = {session.id}
                                weekday={session.weekday}
                                date={session.date}
                                showtimes={session.showtimes}>
                                </Session>
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


export default Sessions;