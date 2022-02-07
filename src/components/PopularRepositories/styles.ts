import styled  from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    
    h1{ 
        margin-top: 1rem;
        color: var(--color-primary);
        margin-bottom: 0.8rem;
    }

    @media (min-width: 768px) {
        padding: 0 2rem;
    }

`;

export const ListRepositories = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
`;

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid var(--text-extra-light);
    border-radius: 5px;
    padding: 0.7rem;
    font-size: 0.8rem;

    .project-description {
        margin-bottom: 1rem;
        
        h2 {
            color: var(--color-primary);
            margin-bottom: 1rem;
        }

        p {
            color: var(--text-body);
        }
    }

    .types-languagens {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .circle {
            height: 1rem;
            width: 1rem;
            border-radius: 50%;
            background: var(--color-primary);
        }

        span {
            padding-left: 0.5rem;
            color: var(--text-body);
        }
    }
`;
