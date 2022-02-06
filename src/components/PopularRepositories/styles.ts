import styled  from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    h1{ 
        margin-top: 1rem;
        color: var(--color-primary)
    }

`;

export const ListRepositories = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    
`