import Clock from "../Clock"
import { StyledContainer, Screen, Title } from "./styled"

const Container = ({ children }) => (
    <StyledContainer>
        <Screen>
            <Clock />
            <Title>Kalkulator walut</Title>
        </Screen>
        {children}
    </StyledContainer>
);

export default Container