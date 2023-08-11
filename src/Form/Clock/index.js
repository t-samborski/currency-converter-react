import "./style.css";
import { useState, useEffect } from "react";

export const Clock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const IntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(IntervalId);
        };
    }, []);
    return (
        <div className="clock">
            Dzisiaj jest {" "} {time.toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long"
            })}
        </div>
    )
};


