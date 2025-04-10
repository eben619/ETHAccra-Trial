import { useCallback, useEffect, useState } from "react";
import { countdownBasedOnDays } from "@/utils";

type CountdownTimerType = {
  time: string;
  // time: string | number | Date;
};

const useCountdownTimer = ({ time }: CountdownTimerType) => {
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTime = useCallback(
    (deadline: string) => {
      const time = Date.parse(deadline) - Date.now();
      const { days, hours, minutes, seconds } = countdownBasedOnDays(time);
      setDate({
        ...date,
        days,
        hours,
        minutes,
        seconds,
      });
    },
    [date]
  );

  useEffect(() => {
    const interval = setInterval(() => getTime(time), 1000);
    return () => clearInterval(interval);
  }, [getTime, time]);

  return {
    ...date,
  };
};

export default useCountdownTimer;
