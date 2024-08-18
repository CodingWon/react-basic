import { useState, useRef } from "react";

let count = 0;

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  /* 
    의문점 : js 변수를 사용 하면 되는데 굳이 useRef를 사용해야 할까?
        - js 변수로는 사용불가
    이유는 ?
        - onChange 로 변화가 생길 때 마다 re-rendering 된다.
        - 컴포넌트안에 있는 모든 내용이 다시 실행 된다.
        -  let count = 0 ; 다시 실행 되어 리렌더링 될때마다 리셋된다.
    count 를 전역에 선언하면 ?
        - count 가 정상적으로 카운팅 된다. 
        
    ## 그렇지만, useRef를 사용해야한다. ##
        - useRef 와 ,useState 는 리렌더링 되어도 값이 리셋 되지 않는다.
  */

  const onChange = (e) => {
    // countRef.current++; // 수정 횟수를 저장 확인 할 수 있다.
    count++;
    console.log(count);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
      console.log(inputRef.current);
    }
  };

  return (
    <div>
      {/* 1. 이름  */}
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
          type="text"
        />
      </div>

      {/* 2. 생년월일 */}
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      {/* 3. 국적 */}
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      {/* 4. 자기소개 */}
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
