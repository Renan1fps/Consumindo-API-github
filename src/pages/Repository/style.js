import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
height: 100vh;
margin: 50px auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

`;

export const Container = styled.div`
margin: 80px auto;
max-width: 700px;
display: flex;
flex-direction: column;
background-color: #2a272a;
border-radius: 5px;
box-shadow: 10px 10px 10px black;
padding: 30px;
`;

export const Owner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
  font-size: 30px;
}

p{
  font-size: 15px;
  margin-top: 5px;
  text-align: center;
}

img{
  width: 150px;
  border-radius: 50%;
}
`;


export const BackButton = styled(Link)`
`;