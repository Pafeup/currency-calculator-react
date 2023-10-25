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
    border: 2px solid #333;
    padding: 30px;
    text-align: center;
    background-color: #555;

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: auto;
    }
`;

export const Label = styled.label`
    color: whitesmoke;
    font-weight: bold;

    ${({value}) => value && css`
        grid-area: "L1";

        @media (max-width: 650px) {
            order: 1;
        };
    `};

    ${({select}) => select && css`
        grid-area: "L2";
    
        @media (max-width: 650px) {
            order: 3;
        }
    `};
`;

export const Input = styled.input`
    height: 48px;
    border-radius: 8px 0px 0px 8px;
    border: 2px solid #333;
    border-right: 1px double #ccc;
    padding-left: 10px;
    padding: 10px;
    outline: none;
    width: 230px;

    @media (max-width: 650px) {
        border-radius: 8px;
        border: 2px solid #333;
        padding: 10px;
        outline: none;
        width: 230px;
        margin-bottom: 20px;
        order: 2;
    };
`;

export const Select = styled.select`
    border-radius: 0px 8px 8px 0px;
    border: 2px solid #333;
    border-left: 0px;
    padding: 10px;
    outline: none;
    max-width: none;
    width: min-content;

    @media (max-width: 650px) {
        border-radius: 8px;
        border: 2px solid #333;
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
    background-color: rgb(49 137 185);
    grid-area: B;
    justify-self: center;
    box-shadow: inset 25px 25px 28px -37px rgb(255, 255, 255),
                inset -25px -25px 28px -37px rgba(0, 0, 0, 1),
                8px 8px 24px 0px rgba(0, 0, 0, 0.24);
    transition: 0.2s;

    &:hover {
        background-color: hsl(201, 58%, 51%);
        transform: scale(1.1);
    };

    &:active {
        background-color: hsl(201, 58%, 56%);
        transition: 0.1s;
        box-shadow: inset 30px 30px 71px -40px rgba(66, 68, 90, 1),
                    inset -30px -30px 28px -37px hsl(201, 58%, 56%),
                    8px 8px 24px 0px rgb(85 85 85);
    };

    @media (max-width: 767px) {
        align-self: center;
        order: 5;
    };
`;