import "./App.css";
import { useState } from "react";

/*
  리렌더링 되는 상황
  1. 자신이 관리하는 state 값이 변경 됐을 때 re-Rendering 이 된다.
  2. 자신이 제공 받는 props 값이 변경 될때 re-Rendering
  3. 부모 컴포넌트가 re-redering 되면 자식 컴포넌트도 re-redering 된다.
*/

const Bulb = () => {
  /*
    상황 : 
    1. count 값이 바뀌면 App.jsx 가 리렌더링 된다.
    3. Bulb 는 자식 컴포넌트로 부모가 리렌더링 되어 같이 리렌더링 된다.

    => Bulb 와 같은 부모가 바뀌면 자동으로 렌더링 되는 컴포넌트가 많이지면
    성능이 않좋아진다. 

    * 해결책 :  관련 없는 state 는 분리하는게 좋다.
  */
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "OFF" ? (
        <h2 style={{ backgroundColor: "orange" }}>ON</h2>
      ) : (
        <h2 style={{ backgroundColor: "gray" }}>OFF</h2>
      )}

      <button
        onClick={() => {
          setLight(light === "OFF" ? "ON" : "OFF");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

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
