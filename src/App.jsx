import "./App.css";
import { useState } from "react";

/*
  리렌더링 되는 상황
  1. 자신이 관리하는 state 값이 변경 됐을 때 re-Rendering 이 된다.
  2. 자신이 제공 받는 props 값이 변경 될때 re-Rendering
  3. 부모 컴포넌트가 re-redering 되면 자식 컴포넌트도 re-redering 된다.
*/

const Bulb = ({ light }) => {
  /*
    상황 : 
    1. count 값이 바뀌면 App.jsx 가 리렌더링 된다.
    3. Bulb 는 자식 컴포넌트로 부모가 리렌더링 되어 같이 리렌더링 된다.

    => Bulb 와 같은 부모가 바뀌면 자동으로 렌더링 되는 컴포넌트가 많이지면
    성능이 않좋아진다. 

    * 해결책 :  관련 없는 state 는 분리하는게 좋다.
  */
  console.log(light);
  return (
    <div>
      {light === "OFF" ? (
        <h2 style={{ backgroundColor: "orange" }}>ON</h2>
      ) : (
        <h2 style={{ backgroundColor: "gray" }}>OFF</h2>
      )}
    </div>
  );
};

function App() {
  // const state = useState(0); // 초기값 : 0
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  /* 
    [0, f]
    - 첫번째 배열 요소 : 새로 생성된 state의 값
    - 두번째 배열 요소 : state 를 변경 시키는 상태변화 함수
  */

  let ex_light = "OFF";

  const handleButton = () => {
    ex_light = ex_light === "OFF" ? "ON" : "OFF";
  };

  // console.log("일반 변수 : ", ex_light);
  // console.log("state 변수 : ", light);

  return (
    <>
      <div>
        <h1>state 변수 적용 시</h1>
        <p>
          리액트는 state 변수를 감지하여 리렌더링 되며 값이 변화한다. 즉, App
          컴포넌트를 다시 호출하여 새로운 state 값을 화면에 보여줌
        </p>
        <Bulb light={light} />
        <button
          onClick={() => {
            setLight(light === "OFF" ? "ON" : "OFF");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>일반 변수 적용 시</h1>
        <p>
          리액트는 일반적인 변수가 아닌 State 의 값이 변화할 때만 리렌더링 한다.
          일반 변수의 변화는 감지하지 못하여 렌더링 되지 않는다.
        </p>
        <h2>{ex_light}</h2>
        <button onClick={handleButton}>{ex_light}</button>
      </div>
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
    </>
  );
}

export default App;
