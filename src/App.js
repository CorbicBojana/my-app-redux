import React from "react";

import "./app.css";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, logg } from "./actions/index";

function App() {
  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="container counter">{counter}</div>
      <div className="container">
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className="container">
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className="container">
        <button className="button" onClick={() => dispatch(logg())}>
          {login ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
}

export default App;
