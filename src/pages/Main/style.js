import styled, {keyframes, css} from "styled-components";

export const Container = styled.div`
max-width: 700px;
background-color: #2a272a;
border-radius: 5px;
box-shadow: 10px 10px 10px black;
padding: 30px;
margin: 80px auto;

h1{
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg{
    margin-right: 10px;
  }
}
`;

export const Form = styled.form`
margin-top: 30px;
display: flex;
flex-direction: row;

input{
  flex: 1;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  padding: 8px 10px;
  font-size: 15px;
  border: none;
}
`;

//criando animação

const animate = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`;

export const SubmitButton = styled.button.attrs(props =>({
  type: 'submit',
  disabled: props.loading,
}))`
padding: 6px 15px;
background-color: green;
border-radius: 5px;
margin-left: 5px;
border: none;
display: flex;
justify-content: center;
align-items: center;

&[disabled]{
cursor: not-allowed;
opacity: 0.5;

${props => props.loading && 
  css`
   svg{
     animation : ${animate} 1s linear infinite
   }
  `
}

}
`;
