import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    position: relative;
    

    @media (min-width: 768px){
        flex-direction: row;
        align-items: flex-start;
    }
`


export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`