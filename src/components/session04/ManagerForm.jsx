import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const ManagerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Họ tên:", state.name);
    console.log("Email:", state.email);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <div>
        <label>Họ tên:</label>
        <br />
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
      </div>
      <br />
      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
      </div>
      <br />
      <button type="submit">Gửi</button>
    </form>
  );
};

export default ManagerForm;
