import styled from "styled-components";


export const Container = styled.nav`
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const List = styled.ul`
    display: flex;
    
    li {
        margin: 1rem;
    }

    a {
        font-size: 1.1rem;
        color: var(--text-body-strong);
        text-decoration: none;
        transition: color .2s;

        &:hover {
            color: var(--color-primary);
        }
    }

`