import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif
        
    }

    body {
        background: #fff;
    }

    ul{
        list-style: none;
    }
    a{
    text-decoration: none;
    }
`;
