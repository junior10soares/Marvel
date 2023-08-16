import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.red};
}
body, html{
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased
}

body, input , textarea, button{
    font-family: 'Prompt', sans-serif;
    font-weight: 700;
    font-size: 1rem
}`
