//post reservar https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function Final(){
        const location = useLocation();
        const {state} = location || {};
        const {selected, user, cpf, details} = state || {};

        if(!state){return <p>Nenhuma informação encontrada!</p>};

            return(
                        <>
                        <Title>Pedido finalizado!</Title>
                        <Container>
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
                        <ReturnButton to={"/"}>Voltar para a tela inicial</ReturnButton>
                        </Container>
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

const ReturnButton = styled(Link)`
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Sarala;
            font-weight: 700;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 8px;
            margin-top: 40px;
            height: 30px;
            background-color: #EE897F;
            color: #2B2D36;

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    `