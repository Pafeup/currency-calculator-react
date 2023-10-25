import styled from "styled-components";

export const ResultContainer = styled.div`
    margin-top: 20px;
    text-align: center;
    padding: 20px;
`;

export const ResultArea = styled.span`
    color: white;
    text-shadow: 0px 0px 15px ${({ theme }) => theme.colors.GreenYellow};
    font-size: larger;
`;