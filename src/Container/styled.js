import styled from "styled-components";

export const StyledContainer = styled.main`
    border: 2px solid #333;
    border-radius: 10px;
    text-align: center;
    font-size: large;
    background-color: ${({ theme }) => theme.colors.tundora};
    padding: 20px;
    margin: 0 auto;
    width: 600px;
    box-shadow: 
        16px 16px 20px -12px ${({ theme }) => theme.colors.gunPowder},
        inset 25px 25px 28px -37px ${({ theme }) => theme.colors.white},
        inset -25px -25px 28px -37px ${({ theme }) => theme.colors.black};

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            max-width: 350px;
        };
`;

export const Screen = styled.div`
    background-color: ${({ theme }) => theme.colors.greenYellow};
    padding-bottom: 20px;
    margin: 0px auto;
    border-radius: 10px;
    border: 2px solid #333;
    box-shadow: inset 10px 10px 20px -12px ${({ theme }) => theme.colors.gunPowder};
`;

export const Title = styled.h1`
    font-family: 'Quantico', sans-serif;
    text-align: center;
    font-size: 40px;
    font-style: italic;
    margin: 20px 5px 5px;
`;