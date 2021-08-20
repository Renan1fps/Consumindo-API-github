import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html, body, #root {
min-height: 100%;
}

body{
background-color: #4e4e4e;
font-size: 14px;
-webkit-font-smoothing: antialiased !important
}

body, input, button{
 color: #efefef;
 font-size: 14px;
 font-family: Arial, Helvetica, sans-serif;
}

button{
cursor: pointer;
}

`;

