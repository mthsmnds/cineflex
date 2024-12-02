//get sessões https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes
import { useEffect } from "react";
import styled from "styled-components"
import axios from "axios";
import Session from "./Session";


function Sessions(){
        // const [sessions, setSessions] = useState([]);

        // useEffect(()=>{
        //         const request = axios.get(" https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes");

        //         request.then(res =>{ setSessions(res.data)});

        //         request.catch((error)=> console.log(error.res.data));
        // }, []);

        // if(sessions === 0){
        //         return(
        //                 <p>Loading...</p>
        //         );
        // }

        return(
                <SessionBox>
                        <Session></Session>
                </SessionBox>

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