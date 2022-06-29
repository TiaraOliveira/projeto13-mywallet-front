import styled from "styled-components"
export default function Logomarca(){
    return(
        <Logo>
             <h1>My wallet</h1> 
        </Logo>
    )
}

const Logo = styled.div`
        img{
            width: 255px;
        }

        h1{
            font-family: 'Playball', cursive;
            font-weight: 400;
            font-size: 69px;
            line-height: 86px;
            text-align: center;
}
`