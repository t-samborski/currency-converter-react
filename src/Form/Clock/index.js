import {Timer} from "./styled";
import {useCurrentDate} from "./useCurrentDate";

export const Clock = () => {
  const time = useCurrentDate();
    return (
        <Timer>
            Dzisiaj jest {" "} {time.toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long"
            })}
        </Timer>
    )
};


