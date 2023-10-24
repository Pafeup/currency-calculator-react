import { formatDate } from "./formatDate"
import { useCurrentDate } from "./useCurrentDate"
import { StyledClock } from "./styled";

const Clock = () => {
    const date = useCurrentDate();
    
    return (
        <StyledClock>
            {formatDate(date)}
        </StyledClock>
    )};

export default Clock