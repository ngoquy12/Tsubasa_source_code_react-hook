import React, { useEffect, useState } from "react";

export default function DemoUseState() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    id: 1,
    userName: "Nguyễn Văn A",
    age: 25,
  });

  const handleIncrement = () => {
    setCount((prev) => prev + 1); // prev = 0
    setCount((prev) => prev + 2); // prev = 1
    setCount((prev) => prev + 3); // prev = 3
  };

  console.log("Render");

  const handleUpdateInfo = () => {
    setUser({ ...user, email: "nva@gmail.com", address: "Thanh Xuân, Hà Nội" });
  };

  useEffect(() => {
    console.log("Callback được gọi");
  });

  return (
    <div>
      {console.log("DOM được cập nhật")}
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <h1>{JSON.stringify(user)}</h1>
      <button onClick={handleUpdateInfo}>Update info</button>
    </div>
  );
}
