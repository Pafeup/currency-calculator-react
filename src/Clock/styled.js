import styled from "styled-components";

export const StyledClock = styled.div`
    background-color: ${({ theme }) => theme.colors.MineShaft1};
    border-bottom: 1px solid ${({ theme }) => theme.colors.MineShaft2};
    width: 100%;
    padding: 5px;
    font-family: 'Quantico', sans-serif;
    text-align: end;
`;