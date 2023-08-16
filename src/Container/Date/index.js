import { useState, useEffect } from "react"
import "./style.css"

const formatDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

const CurrentDate = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="date">
            {formatDate(date)}
        </div>
    )
}
export default CurrentDate