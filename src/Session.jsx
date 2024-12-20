import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Session(props){
        return (
                <>
                <Date>{props.weekday}, {props.date}</Date>
                        <DivBar></DivBar>
                        <TimeContainer>
                                {props.showtimes.map((time, i)=>(
                                        <Linker key={i} to={`/assentos/${time.id}`}>
                                        <Time>{time.name}</Time>
                                        </Linker>
                                ))}
                        </TimeContainer>
                </>
        )
}

//--------------------STYLES-----------------

const DivBar = styled.div`
        border-bottom: 1px solid #4E5A65;
        margin-left: 20px;
        margin-right: 20px;
`

const Date = styled.p`
        padding: 20px;
        font-size: 20px;
`

const TimeContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        padding: 20px;

`

const Time = styled.p`
        padding: 10px 20px;
        margin:5px;
        border: 2px solid #EE897F;
        border-radius: 4px;
        color: #EE897F;
        font-size: 16px;
        transition: all 0.3s ease ;

        &:hover{
                background-color: #FADBC5;
                color: #4E5A65;
                cursor: pointer;
        }
`

const Linker = styled(Link)`
    text-decoration: none;
`;
export default Session;