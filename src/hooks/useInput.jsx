import { useState } from "react";

/*
  3) 나만의 훅(Custom Hook) 직접 만들 수 있다.
        - use 라고 사용하는 함수를 내부적으로 customHook 으로 인식한다.
        - 컴포넌트 마다 반복적으로 사용하고, useState 를 사용 hook 이라면 customHook 으로 분리 할 수 있다.
        - 불러 올때 변수명을 바꿔서 여러번 사용 할 수 있다.

*/
function useInput() {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return [input, onChangeInput];
}

export default useInput;
