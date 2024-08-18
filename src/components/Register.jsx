import { useState } from "react";
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

  /*
  1. onChage 가 통합되어 어떤 input 에서든 실행된다.
  2. setInput 함수가 호출된다.
  3. 인수로 객체를 만들어서 전달
  4. ...input 스프레드 연산자로 기존값을 나열
  5. property key 위치에 대괄로[] 를 입력하면 key 값으로 설정
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
