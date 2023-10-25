import styled from "styled-components";

export const StyledContainer = styled.main`
    border: 2px solid #333;
    border-radius: 10px;
    text-align: center;
    font-size: large;
    background-color: #444;
    padding: 20px;
    margin: 0 auto;
    width: 600px;
    box-shadow: 
        16px 16px 20px -12px rgba(66, 68, 90, 1),
        inset 25px 25px 28px -37px rgb(255, 255, 255),
        inset -25px -25px 28px -37px rgba(0, 0, 0, 1);

        @media (max-width: 650px) {
            max-width: 350px;
        };
`;

export const Screen = styled.div`
    background-color: rgba(181, 255, 63, 0.685);
    padding-bottom: 20px;
    margin: 0px auto;
    border-radius: 10px;
    border: 2px solid #333;
    box-shadow: inset 10px 10px 20px -12px rgba(66, 68, 90, 1);
`;

export const Title = styled.h1`
    font-family: 'Quantico', sans-serif;
    text-align: center;
    font-size: 40px;
    font-style: italic;
    margin: 20px 5px 5px;
`;