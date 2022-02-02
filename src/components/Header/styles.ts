import styled from "styled-components";

interface Props {
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
export const MenuVisivel = styled.div<Props>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  ${(props) => props.openMenu ? 'var(--menu-light)': 'transparent'};
    
`;

export const MenuEscondido = styled.div<Props>`
    display: ${(props) => props.openMenu ? 'flex': 'none'};
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    background-color: var(--menu-light);
    padding-top: 1rem;
    
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        padding-top: 0;
        width: 100%;
        background-color: transparent;
    }
`;

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

    @media (min-width: 768px) {
        margin: 0.5rem;
        padding: 1rem 0.5rem;
        background-color: var(--text-extra-light);
        width: 70%;
    }
`;
export const Menu = styled.ul`
    width: 100%;
    

    li {
        margin-top: 1rem;
        border-bottom: 1px solid var(--text-light);
        display: flex;
        justify-content: center;

        font-size: 1.2rem;

        @media (min-width: 768px) {
            margin-top: 0%;
            margin: 0.5rem;
            border-bottom: 0;
            color: var(--text-body-strong);
        }

        a {
            text-decoration: none;
            color: var(--white);
            transition: 0.2s;

            @media (min-width: 768px) {
                color: var(--text-body-strong);
                &:hover {
                color: var(--color-primary);
                font-weight: 400;
               } 
            }
        }
    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 2rem;
    }

`
export const Icons = styled.div`
    @media (min-width: 768px) {
        position: absolute;
        top: 0.8rem;
        right: 0.5rem;
    }
`