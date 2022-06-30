import styled from 'styled-components';
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function CashEntry(){
    const [loginemail, setloginEmail] =  useState();
    const [loginpassword, setloginPassword] =  useState();
    const navigate = useNavigate();

    function Register(){
        navigate("/Registros");
    }
    return(
        <Container>
            
           <h4>Nova saída</h4>
           <form >
            <input placeholder="valor" type="email"  onChange={e => setloginEmail(e.target.value)}  value={loginemail} required/>
            <input placeholder="descrição" type="password"  onChange={e => setloginPassword(e.target.value)}  value={loginpassword} required/>
            <button onClick={Register} >Salvar saída</button>
        </form>
        
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
    input{
        color: #F2F2F2
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        
        width: 326px;
        height: 58px;
        left: 25px;
        top: 96px;
        
        background: #FFFFFF;
        border-radius: 5px;
        margin-top: 10px;
       
    }
    

    button{
        width: 326px;
        height: 46px;
        left: 25px;
        top: 238px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        background: #A328D6;
        border-radius: 5px;
        text-align: center;
        margin-top: 20px;
    }

    form{
        display:flex;
        flex-direction: column;
    }

    h4{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-top:15px;
    }

    
`;