//get assentos https://mock-api.driven.com.br/api/v8/cineflex/showtimes/ID_DA_SESSAO/seats
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Seats(){
            const [seats, setSeats] = useState([]);
            console.log(seats);

            const [details, setDetails] = useState(null);

            const {sessionId} = useParams();

            const [selected, setSelected] = useState([]);

            const handleSelect = (seatId) =>{
                        if(selected.includes(seatId)){
                                    setSelected(selected.filter(id => id !== seatId));
                        } else{
                                    setSelected([...selected, seatId]);
                        }
            };

            useEffect(() => {
              axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`)
                  .then((res) => {
                      setSeats(res.data.seats);
                      setDetails({
                          title: res.data.movie.title,
                          weekday: res.data.day.weekday,
                          time: res.data.name,
                      });
                  })
                  .catch((error) => console.error(error.response.data));
                        }, []);
                  

            
//--------------------BookSeats------------------
          
            const [user, setUser] = useState("");
            const [cpf, setCpf] = useState("");
            const navigate = useNavigate();

            function bookSeats(event){
                        event.preventDefault();

                        const bookingData ={selected, user, cpf, details};

                        const req = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
                                    ids: seats.name,
                                    name: user ,
                                    cpf: cpf,
                        });

                        req.then(() => navigate("/sucesso", {state: bookingData}));
                        req.catch(error=>console.log(error.data));
            }

//------------------------------------PAGE------------------------------

            return(
                        <>
                                    <Title>Selecione o(s) assento(s)</Title>
                                    <SeatBox>
                                                {seats.map(seat =>(
                                                            <Seat
                                                            key = {seat.id}
                                                            id = {seat.id}
                                                            isAvailable ={seat.isAvailable}
                                                            isSelected = {selected.includes(seat.id)}
                                                            onClick ={() =>handleSelect(seat.id)}
                                                            >{seat.name}            
                                                            </Seat>
                                                ))}
                                    </SeatBox>
                                    <DivBar></DivBar>
                                    <Container>
                                                <InputField onSubmit ={bookSeats}>
                                                            <label htmlFor ="name">Nome do comprador(a)</label>
                                                            <input type = "text"  id = "name" placeholder="Digite seu nome..." value = {user} onChange = {e=> setUser(e.target.value)} required/>
                                                            <label htmlFor ="cpf">CPF do comprador(a)</label>
                                                            <input type = "text" id = "cpf" placeholder="Digite seu CPF..." value = {cpf} onChange = {e=> setCpf(e.target.value)} required/>
                                                <BookButton type ="submit">Reservar assento(s)</BookButton>
                                                </InputField>
                                    </Container>
                        </>
            )
};

export default Seats;

const Title = styled.div`
font-family: "Sarala", sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 90px;
  font-size: 24px ;
  font-weight: 500;
`;

const SeatBox = styled.div`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
`;

const Seat = styled.p`
            font-family: Roboto;
            font-size: 11px;
            color: #4E5A65;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            padding: 10px;
            margin-bottom: 16px;
            margin-left: 3px;
            margin-right: 3px;
            background-color: ${({isAvailable, isSelected})=>
                        isSelected ? '#FADBC5' : isAvailable ? '#9DB899' : '#4E5A65'} ;
            border: ${({isSelected})=>
                        isSelected ? '2px solid #EE897F' : '2px solid #808F9D'};
            border-radius: 20px;
`
const DivBar = styled.div`
            border-bottom: 1px solid #4E5A65;
            margin-left: 20px;
            margin-right: 20px;
`

const Container = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
`

const InputField = styled.form`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin: 20px;
            /* background-color: blue; */

            input{
                        width: 360px;
                        height:30px;
                        border-radius: 8px;
                        margin-top: 10px;
            }

            label{
                        margin-top: 15px;
                        margin-bottom: -8px;
            }
            
`

const BookButton = styled.button`
            font-family: Sarala;
            font-weight: 700;
            width: 100%;
            height:40px;
            border-radius: 8px;
            margin-top: 20px;
            background-color: #EE897F;
            color: #2B2D36;
`
