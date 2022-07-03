import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from 'axios';
import { useState } from "react";
import UserContext from './contexts/UserContext';
import { ThreeDots } from  'react-loader-spinner';
import Logomarca from './Logomarca';


export default function TelaLogin(){
    const [loginemail, setloginEmail] =  useState();
    const {dados, setDados} = useContext(UserContext);
    const [loginpassword, setloginPassword] =  useState();

    const [Loading, setLoading] = useState(false);
    
    const navigate = useNavigate() 
    
    function Login(event){
        setLoading(true);
        event.preventDefault();
        const dadosLogin = {
            email: loginemail,
            password: loginpassword,
        }
         const promise = axios.post('http://localhost:5000/login',dadosLogin )
         promise.then((response) => {
           
           setDados(response.data);
           
           const serializedUser = JSON.stringify(dados);


           localStorage.setItem("user", serializedUser);
           navigate("/Registros");
          });
             
          promise.catch((e) => {
            alert("Login ou senha não correspondem, tente novamente.");
            setLoading(false);
            setloginPassword("")
            setloginEmail("")
          });
    }



 return(
     <>
    
     <Container>
     <Logomarca />
         <form >
            <input placeholder="teste@teste.com" type="email"  onChange={e => setloginEmail(e.target.value)}  value={loginemail} disabled={Loading} required/>
            <input placeholder="••••••" type="password"  onChange={e => setloginPassword(e.target.value)}  value={loginpassword} disabled={Loading} required/>
            <button onClick={Login}>{Loading ? (
             <ThreeDots color="#ffffff" height={25} width={316}/>
            ) : (
              "Entrar"
            )}</button>
        </form>
        
        
         <Link to={`/Cadastro`}>
            <h4>Primeira? Cadastre-se!</h4>
		 </Link>
       
       
     </Container>
     </>
    
 )
}


const Container = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #126BA5;
	width:100%;
    position: fixed;
    top: 100px;
	
	
    input{
        color: #F2F2F2
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        width: 303px;
        height: 45px;
        margin-top: 10px;
       
    }
    

    button{
        width: 316px;
        height: 45px;
        background: #52B6FF;
        opacity: 0.7;
        border-radius: 4.63636px;
        margin-top: 10px;
        color: #FFFFFF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

    }
    form{
        display:flex;
        flex-direction: column;
    }
    h4{
        margin-top:15px;
    }
  

`;
