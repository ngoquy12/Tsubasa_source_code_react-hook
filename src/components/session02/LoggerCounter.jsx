import React, { useState, useEffect } from "react";

const LoggerCounter = () => {
  const [count, setCount] = useState(0);

  // useEffect chạy khi count thay đổi
  useEffect(() => {
    console.log("Giá trị count mới là:", count);
  }, [count]);

  // useEffect chỉ chạy một lần khi component mount
  useEffect(() => {
    console.log("Component đã được hiển thị!");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
};

export default LoggerCounter;
