import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.neutral.veryLightGrey};
    font-family: 'Rubik', sans-serif;
    font-size: clamp(.75rem, 1.8vw, 1rem);
}

button.user-actions {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.modarateBlue};
    border: none;
    background-color: transparent;
    &:hover {
        color: ${({ theme }) => theme.colors.primary.lightBlue};
    }

    & + & {
        color: ${({ theme }) => theme.colors.primary.softRed};
    }

    & + &:hover {
        color: ${({ theme }) => theme.colors.primary.paleRed};
    }
}`;

export default GlobalStyle;
