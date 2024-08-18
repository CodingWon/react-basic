import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Bulb from "./components/Bulb";

/*
  리렌더링 되는 상황
  1. 자신이 관리하는 state 값이 변경 됐을 때 re-Rendering 이 된다.
  2. 자신이 제공 받는 props 값이 변경 될때 re-Rendering
  3. 부모 컴포넌트가 re-redering 되면 자식 컴포넌트도 re-redering 된다.
*/

function App() {
  let ex_light = "OFF";

  const handleButton = () => {
    ex_light = ex_light === "OFF" ? "ON" : "OFF";
  };

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
