import styled from "styled-components"
export default function Logomarca(){
    return(
        <Logo>
             <h1>My wallet</h1> 
        </Logo>
    )
}

const Logo = styled.div`
        

        h1{
            font-family: 'Saira Stencil One';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 50px;
       }
`