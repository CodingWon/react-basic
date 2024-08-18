import { useState, useRef } from "react";
// 간단한 회원가입 폼
/*
    1. 이름
    2. 생년월일
    3. 국적
    4. 자기소개
*/

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const refObj = useRef(0);
  console.log(refObj); // {current : 0}
  console.log(refObj.current); // {current : 0}
  /*
    useRef
    - current라는 property 에 현재 보관할 값을 담아두기만 하는 단순한 js 객체
    - 값이 변경 되어도 컴포넌트를 리렌더링 시키지 않는다.
 */

  const onChange = (e) => {
    console.log("key:", e.target.name, " value:", e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      //   name : hi
      //  birth : 2024-08-06
      //  country : kr
      //  bio : 안녕
    });
  };

  return (
    <div>
      <div>
        <p>{refObj.current}</p>
        <button
          onClick={() => {
            refObj.current++;
            console.log(refObj.current);
            // 값은 변경 되어도 리렌더링이 되지 않아 UI 변경은 없다.
            // 저장 할때 렌더링 되면 그때 값이 바뀜
          }}
        >
          ref + 1
        </button>
      </div>

      {/* 1. 이름  */}
      <div>
        <input
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
    </div>
  );
};

export default Register;
