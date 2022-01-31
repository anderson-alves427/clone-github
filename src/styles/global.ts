import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FFF;
        --background--gray: #E5E5E5;

        
        --color-primary: #7B61FF;
        --text-body-strong: #16191A;
        --text-body: rgba(22, 25, 26, 0.7);
        --text-light: rgba(22, 25, 26, 0.5);

        --white: #fff;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, span {
        font-family: 'Poppins';
        font-weight: 400;
    }

    h1, h2, h3, h4, h4, h6, strong {
        font-weight: 500;
    }

    li {
        list-style: none;
    }

    //font-size: 16px (Desktop)

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }

    }

    button {
        cursor: pointer;
        background-color: var(--color-primary);
        color: var(--white);
        border: none;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;

export const Container = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media (min-width: 768px){
        flex-direction: row;
    }
`;