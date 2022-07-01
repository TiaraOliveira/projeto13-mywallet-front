import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useState } from "react";
import { useContext } from "react";
import UserContext from './contexts/UserContext';

export default function Registros(){
    const navigate = useNavigate();
    const {dados, setDados} = useContext(UserContext);
    const [solds, setSolds] = useState([]);
    const config = {
        headers: {
            "Authorization": `Bearer ${dados.token}`
        }
    }
    
function CashEntry(){
    navigate("/CashEntry");
}

function CashOut(){
    navigate("/CashOut");
}


function Backlogin(){
    navigate("/");
}

function Rendersolds(){
    const promise = axios.get("http://localhost:5000/Cashin", config);
  
      promise.then(response => {
          setSolds(response.data);
          
        });
        console.log(solds)
        promise.catch(err => {
          const message = err.response.statusText;
          alert(message);
        });
  }
  
    return(
        <Container>
            
            <Header>
                <h4>Olá, fulano</h4>
                <Icon onClick={Backlogin}>
                <ion-icon name="exit-outline"></ion-icon>
                </Icon>
            </Header>
            
            <Content>
                
            <HabitList>   
                        {solds.length === 0 ?
                       'Não há registros e entradas'
                    :
                    solds.map((habito) => {
                        return(
                            <Atividade>
                                <eii>
                                    <h4>{habito.description}</h4>
                                   
                                        </eii>
                             
                            
                            </Atividade>
                        );
                    })
                    }
                </HabitList>
            </Content>
			
            <Add>
                <Registrer onClick={CashEntry}>
                    <Icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    </Icon>
                    <h4>Nova entrada</h4>
                </Registrer>
                <Registrer onClick={CashOut}>
                    <Icon>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    </Icon>
                    <h4>Nova saída</h4>
                </Registrer>
            </Add>
           
            
         </Container>
       
    )
}


const Container = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: center;
	background: #8C11BE;
	width:100%;
    position: fixed;
    top: 0px;
	margin-top: 10px;

    
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    margin: 24px;
	
    h4{
        margin-top:15px;
        color: #FFFFFF;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        margin: 24px;
    }


`

const Add = styled.div`
    display: flex;
    align-items: center;
	justify-content: center;
    position: fixed;
	bottom: 0;
    z-index:1;
    background: #8C11BE;

    h4{
        margin-top:15px;
        color: #FFFFFF;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }

    
`

const Registrer = styled.div`
    width: 155px;
    height: 114px;
    left: 25px;
    top: 537px;
    margin-right: 19px;
    background: #A328D6;
    border-radius: 5px;
   
`

const Icon = styled.div`
    color: #FFFFFF;
    margin-right: 19px;
    font-size: 22px;
`
const Content = styled.div`
    display: flex;
    align-items: center;
	justify-content: center;
    width:80%;
    height: 446px;
    left: 25px;
    top: 78px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 30px;

    h5{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    margin: 24px;

    }
`
const HabitList = styled.div`
    margin-bottom: 100px;
    margin-top: 40px;
    width: 98%;
`
const Atividade = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 30px 30px;
    height: 170px;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding-left: 15px;
`