import styled from 'styled-components';
import {useNavigate} from "react-router-dom";



export default function Registros(){
    const navigate = useNavigate();

function CashEntry(){
    navigate("/CashEntry");
}

function CashOut(){
    navigate("/CashOut");
}


    return(
        <Container>
            
            <Header>
                <h4>Olá, fulano</h4>
                <Icon>
                <ion-icon name="exit-outline"></ion-icon>
                </Icon>
            </Header>
            
            <Content>
                <h5>Não há registros de entrada ou saídas</h5>
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