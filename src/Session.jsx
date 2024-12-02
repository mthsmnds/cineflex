import React from "react";
import styled from "styled-components";

function Session(props){
        return (
                <>
                <Date>Outra-Feira, 31/02/2029</Date>
                        <DivBar></DivBar>
                        <TimeContainer>
                                <Time>16:40</Time>
                                <Time>16:40</Time>
                                <Time>16:40</Time>
                                <Time>16:40</Time>
                                <Time>16:40</Time>
                                <Time>16:40</Time>
                                <Time>16:40</Time>
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

export default Session;