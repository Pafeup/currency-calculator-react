import { css } from "styled-components";
import styled from "styled-components";

export const StyledForm = styled.form`
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto 1fr;
    row-gap: 5px;
    grid-template-areas:
        "L1 L2"
        "I I"
        "B B";
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.mineShaft0};
    padding: 30px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.emperor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: auto;
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.whiteSmoke};
    font-weight: bold;

    ${({ value }) => value && css`
        grid-area: "L1";

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            order: 1;
        };
    `};

    ${({ select }) => select && css`
        grid-area: "L2";
    
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            order: 3;
        }
    `};
`;

export const Input = styled.input`
    height: 48px;
    border-radius: 8px 0px 0px 8px;
    border: 2px solid ${({ theme }) => theme.colors.mineShaft0};
    border-right: 1px double ${({ theme }) => theme.colors.silver};
    padding-left: 10px;
    padding: 10px;
    outline: none;
    width: 230px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.colors.mineShatf0};
        padding: 10px;
        outline: none;
        width: 230px;
        margin-bottom: 20px;
        order: 2;
    };
`;

export const Select = styled.select`
    border-radius: 0px 8px 8px 0px;
    border: 2px solid ${({ theme }) => theme.colors.mineShaft0};
    border-left: 0px;
    padding: 10px;
    outline: none;
    max-width: none;
    width: min-content;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.colors.mineShaft0};
        order: 4;
        width: 230px;
    };
`;

export const Button = styled.button`
    margin-top: 20px;
    height: 80px;
    width: 140px;
    border: 0px;
    font-weight: bold;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.bostonBlue};
    grid-area: B;
    justify-self: center;
    box-shadow: inset 25px 25px 28px -37px ${({ theme }) => theme.colors.white}, 
                inset -25px -25px 28px -37px ${({ theme }) => theme.colors.black},
                8px 8px 24px 0px ${({ theme }) => theme.colors.mineShaft0};
    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.shakespeare};
        transform: scale(1.1);
    };

    &:active {
        background-color: ${({ theme }) => theme.colors.shakespeare__active}; 
        transition: 0.1s;
        box-shadow: inset 30px 30px 71px -40px ${({ theme }) => theme.colors.gunPowder},
                    inset -30px -30px 28px -37px ${({ theme }) => theme.colors.shakeSpeare__active},
                    8px 8px 24px 0px ${({ theme }) => theme.colors.emperor};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        align-self: center;
        order: 5;
    };
`;