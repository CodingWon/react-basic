import "./App.css";
import { useState } from "react";

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

  console.log("일반 변수 : ", ex_light);
  console.log("state 변수 : ", light);

  return (
    <>
      <div>
        <h1>state 변수 적용 시</h1>
        <p>
          리액트는 state 변수를 감지하여 리렌더링 되며 값이 변화한다. 즉, App
          컴포넌트를 다시 호출하여 새로운 state 값을 화면에 보여줌
        </p>
        <h2>{light}</h2>
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
