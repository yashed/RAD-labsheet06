import React, { useState, useEffect } from "react";

function Timmer() {
  const [seconds, setTime] = React.useState(0);
  const [stop, setStop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stop === 1) {
        return clearInterval(interval);
      }
      setTime((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [stop]);

  const timeStop = () => {
    // console.log(stop);
    setStop(1);
  };
  return (
    <div>
      <h2>Seconds = {seconds}</h2>
      <button onClick={timeStop}>Stop Timer</button>
    </div>
  );
}
export default Timmer;
