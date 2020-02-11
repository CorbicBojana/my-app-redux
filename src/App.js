import React from "react";

import "./app.css";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, login, logout } from "./actions/index";

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.login);
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
        {isLoggedIn ? (
          <button className="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        ) : (
          <button className="button" onClick={() => dispatch(login())}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
