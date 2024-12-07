//post reservar https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Final(){
        const location = useLocation();
        const {state} = location || {};
        const {selected, user, cpf, details} = state || {};

        if(!state){return <p>Nenhuma informação encontrada!</p>};

            return(
                        <>
                        <Title>Pedido finalizado!</Title>
                        <Infobox>
                                    <InfoTitle>Filme e sessão</InfoTitle>
                                    <DivBar></DivBar>
                                    <Info>
                                        {details.title} <br/>
                                        {details.weekday} <br/>
                                        {details.time}
                                    </Info>
                                    <InfoTitle>Ingressos</InfoTitle>
                                    <DivBar></DivBar>
                                    <Info>
                                        {selected.map((seat) => `Assento ${seat}`)}
                                    </Info>
                                    <InfoTitle>Comprador(a)</InfoTitle>
                                    <DivBar></DivBar>
                                    <Info>
                                        Nome: {user} <br/>
                                        CPF: {cpf}
                                    </Info>
                        </Infobox>
                        </>
            )
};

export default Final;

const Title = styled.div`
            font-family: "Sarala", sans-serif;
            display: flex;
            justify-content: center;
            padding-top: 90px;
            font-size: 24px ;
            font-weight: 500;
            color: #9DB899;
`;

const DivBar = styled.div`
            border-bottom: 1px solid #4E5A65;
            margin-left: 20px;
            margin-right: 20px;
`

const Infobox = styled.div`
        background-color: #2B2D36;
        border-radius: 8px;
        margin: 30px;
`

const InfoTitle = styled.h1`
            font-weight: 700;
            font-size: 22px;
            color: #EE897F;
            margin-left: 20px;
            padding-top: 20px;
            padding-bottom: 10px;
`

const Info = styled.p`
            font-weight: 400;
            font-size: 20px;
            margin-left:20px;
            padding-top: 10px;
            padding-bottom: 10px;
            line-height: 32px;
`