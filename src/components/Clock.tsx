import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const formatTime = (time: any) => {
    return time < 10 ? "0" + time : time;
  };

  return (
    <>
      <h2 className="text-2xl text-white">
        {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())}
      </h2>
    </>
  );
};

export default DigitalClock;
