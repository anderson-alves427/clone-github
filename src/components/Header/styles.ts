import styled from "styled-components";

interface MenuEscondidoProps {
    openMenu: boolean;
}

export const Container = styled.header`
    width: 100%;
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    top: 0;
    right: 0;

    @media (min-width: 768px) {
        z-index: 0;
        position: relative;
        flex-direction: row;

        .invisibilty-menu {
            display: none;
        }
    }

`
export const MenuVisivel = styled.div<MenuEscondidoProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  ${(props) => props.openMenu ? 'var(--menu-light)': 'transparent'};
`
export const MenuEscondido = styled.div<MenuEscondidoProps>`
    display: ${(props) => props.openMenu ? 'flex': 'none'};
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--menu-light);
    padding-top: 1rem;
    
    @media (min-width: 768px) {
        display: flex;
        width: 100%;
    }


`



export const Form = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 1.2rem 0.5rem;
    border-radius: 2.5rem;

    height: 2rem;
    width: 80%;

    background-color: #FBFBFB;

    input {
        margin-left: 0.3rem;
        width: 85%;
        outline: 0;
        border: 0;
        background-color: transparent;
        color: var(--text-strong);
    }
`
export const Menu = styled.ul`
    width: 100%;

    li {
        margin-top: 1rem;
        border-bottom: 1px solid var(--text-light);
        display: flex;
        justify-content: center;

        font-size: 1.2rem;

        a {
            text-decoration: none;
            color: var(--white);
        }
    }

`
export const Icons = styled.div`
    @media (min-width: 768px) {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }
`