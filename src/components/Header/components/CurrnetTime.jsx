import { useEffect, useState } from "react";
import { Time } from "./CurrentTime.styled";
import { timeToString } from "../../../assets/util/timeToString";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <Time>{timeToString(time)}</Time>;
}

export default CurrentTime;
