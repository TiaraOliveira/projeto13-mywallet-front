import styled from 'styled-components';
import { useState } from "react";
import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import UserContext from './contexts/UserContext';
import { useContext } from "react";

export default function CashEntry(){
    const [soldin, setSoldin] =  useState();
    const [description, setDescription] =  useState();
    const navigate = useNavigate();
    const {dados} = useContext(UserContext);

    
    function Register(event){
        event.preventDefault();
      const body = {
            soldin: parseFloat(Math.abs(soldin).toFixed(2)),           
            description: description,
        }
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }
        const promise = axios.post('https://back-project13-mywallet.herokuapp.com/Cashin', body, config)
        promise.then(() => navigate("/Registros"))
        promise.catch((e) => {
            alert("Campos invalidos, verifique preenchimento.");
         });
    }
    return(
        <Container>
            <Content>
                <h4>Nova entrada</h4>
                <form >
                    <input placeholder="valor" type="number"  onChange={e => setSoldin(e.target.value)}  value={soldin} required/>
                    <input placeholder="descrição" type="text"  onChange={e => setDescription(e.target.value)}  value={description} required/>
                    <button onClick={Register}>Salvar entrada</button>
                </form>
            </Content>
        </Container>
       

    )
}


const Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height:100vh;
        background-color: #8C11BE;
        padding-top: 80px;
        font-family: 'Raleway';
        font-style: normal;

    input{
        color: #F2F2F2
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-top: 10px;
    }
    

    button{
        width: 332px;
        height: 46px;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        background: #A328D6;
        border-radius: 5px;
        text-align: center;
        margin-top: 20px;
        border-color: #A328D6;
    }

    form{
        display:flex;
        flex-direction: column;
    }

    h4{
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom:20px;
      
    }

    
`;

const Content = styled.div`
    positio:fixed;
    top: 10px;
  


`