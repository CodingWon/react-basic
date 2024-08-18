import { useState } from "react";
import useInput from "../hooks/useInput";

/*
    3가지 Hook 관련된 팁
    1) 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
        - Error: Invalid hook call. Hooks can only be called inside of the body of a function component.

    2) 조건부로 호출 될 수 없다.
        - 호출 되는 순서를 통제 할 수 없다.

*/

// 1) const state = useState();

const HookExam = () => {
  // 2)
  //   if (true) {
  //     const state1 = useState();
  //   }
  //   for (;;) {
  //     const state2 = useState();
  //   }

  //3)
  const [input, onChangeInput] = useInput();
  const [input2, onChangeInput2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChangeInput}></input>
      <input value={input2} onChange={onChangeInput2}></input>
    </div>
  );
};

export default HookExam;
