import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 1rem;

    > h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 1rem;
        color: var(--color-primary);
    }

    button {
        width: 100%;
        padding: 0.2rem;
        border-radius: 5px;
        margin-bottom: 1rem;

        &:hover {
            filter: brightness(0.9  );
        }
    }

    > p {
        margin-bottom: 1rem;
        color: var(--text-body);
        font-size: 0.9375rem;
    }

    .report {
        cursor: pointer;
    }


    @media (min-width: 768px) {
        width: 25%;
  }

`;

export const Person = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 1rem;

    img {
        border-radius: 50%;
        width: 20%;
    }

    div {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 0.9375rem;
            color: var(--text-light);
        }
    }

    @media (min-width: 768px) {
        flex-direction: column;
        align-items: center;

        img {
            width: 80%;
        }
  }
`;

export const Stars = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-size: 1.5rem;
        }

        span {
            font-size: 0.9375rem;
            color: var(--text-light);
        }
    }
`;

export const Informations = styled.ul`

    margin-bottom: 1rem;
    li {
        span {
            margin-left: 0.5rem;
            font-size: 0.9375rem;
            color: var(--text-body);
        }
    }
`
