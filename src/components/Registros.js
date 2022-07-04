import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import UserContext from './contexts/UserContext';
import { useContext } from "react";


export default function Registros(){
    const navigate = useNavigate();
    const [solds, setSolds] = useState([]);
    const {dados} = useContext(UserContext);
    let total = 0
    const config = {
        headers: {
            Authorization: `Bearer ${dados.token}`
        }
    }

    useEffect(() => {
		
        const promise = axios.get("https://back-project13-mywallet.herokuapp.com/Cashin", config);
        console.log(promise)
    
        promise.then(response => {setSolds(response.data)});
       
          promise.catch(err => {
            const message = err.response.statusText;
            alert(message);
          })
      });
    
      for (let i = 0; i < solds.length; i++) {
        if(solds[i].type ==="increase"){
            total = total + solds[i].soldin
        } else{
            total = total - solds[i].soldin
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


  

 
    return(
        <Container>
      
            <Header>
                <h4>Olá, {dados.name}</h4>
                <Icon onClick={Backlogin}>
                <ion-icon name="exit-outline"></ion-icon>
                </Icon>
            </Header>
            
            <Content>
              
            <Extract>   
                        {solds.length === 0 ?
                       'Não há registros e entradas'
                    :
                    solds.map((extract) => {
                        return(
                            <Atividade>
                                <span>
                                    <h5>{extract.dia}</h5>
                                    <h4>{extract.description}</h4>
                                </span>
                                  
                                    <span>
                                        <Eachvalue eachvalue= {extract.type}>R$ {(extract.soldin).toFixed(2).replace('.', ',')}</Eachvalue>
                                       
                                    </span>
    
                          </Atividade>
                        );
                    })
                    }
                </Extract>
             
                    <Sold>
                        <h4>Saldo</h4>
                        <Total total= {total}>R$ {total.toFixed(2).replace('.', ',')}</Total>
                    </Sold>

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
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height:100vh;
background-color: #8C11BE;

    
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:80%;
   
	
    h4{
        margin-top:15px;
        color: #FFFFFF;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
       
    }


`
const Eachvalue =styled.div`
    color: ${(props) => props.eachvalue === "increase" ? "#03AC00" : "#C70000"};
    padding-right: 15px;
   
`

const Add = styled.div`
    display: flex;
    align-items: center;
	justify-content: center;
    position: fixed;
	bottom: 0;
    width: 100%;
    heigth: 50px;
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
    position: relative;
    position: relative;
        overflow-y: scroll;
        scrollbar-width: none;
    display: flex;
    align-items: center;
	justify-content: center;
    width:80%;
    height: 800px;
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

const Sold = styled.div`
        position:fixed;
        bottom: 130px;
        z-index:1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:75%;
        margin-left:15px;
        padding-rigth:45px;
        height: 50px;
        background: #ffffff;
`

const Extract = styled.div`
    position: absolute;
    padding-top:35px;
  
    margin-top: 10px;
    width: 98%;
    height: 80%;
`

const Atividade = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 30px 30px;
    height: 17px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 15px;
    

    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padinng:10px;
    }
    h5{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
    h4{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;


    }
`
const Total = styled.div`
            color: ${(props) => props.total > 0 ? "#03AC00" : "#C70000"};
            margin-rigth:45px;
`