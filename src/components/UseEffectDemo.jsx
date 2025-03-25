import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");

  // Trường hợp 1  Ít dùng
  //   useEffect(() => {
  //     console.log("Callback được gọi");
  //   });

  //   Trường hợp thú 2: Hay dùng để gọi API đọc dữ liệu
  //   useEffect(() => {
  //     console.log("Callback được gọi");
  //   }, []);

  //   Trường hợp thú 2: Hay dùng
  //   useEffect(() => {
  //     console.log("Callback được gọi");
  //   }, [counter, email]);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Đang chạy...");
    }, 1000);

    // Cleanup function
    return () => {
      // Tiến hành dọn dẹp bộ nhớ
      clearInterval(timerId);
      console.log("Component đã unmount");
    };
  }, []);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      {console.log("DOM được cập nhật")}
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}
