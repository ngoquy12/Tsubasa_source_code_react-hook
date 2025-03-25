import React, { useEffect, useRef, useState } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);

  const [count, setCount] = useState(0);
  let renderCount = useRef(0);

  const [time, setTime] = useState(0);
  let intervalId = useRef(null);

  console.log("inputRef: ", inputRef.current);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    renderCount.current += 1;
  });

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    console.log("intervalId trong start: ", intervalId);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
    console.log("intervalId trong stop: ", intervalId);
  };

  return (
    <div>
      <input ref={inputRef} type="text" id="input" />
      <button onClick={handleFocus}>Focus input</button>

      <h1>Count: {count}</h1>
      <h2>Component re-render: {renderCount.current} lần</h2>
      <button onClick={handleCount}>Increment</button>

      <h1>Time: {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
