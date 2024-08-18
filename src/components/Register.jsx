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

  console.log(input);

  const onChangeName = (e) => {
    setInput({
      ...input, // 스프레드 연산자 => name 이 아닌 birth, country, bio 값을 그대로 유지시킴 / 없을 경우 name 이 입력 될 때마다 값이 사라짐
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

  return (
    <div>
      {/* 1. 이름  */}
      <div>
        <input
          value={input.name}
          onChange={onChangeName}
          placeholder="이름"
          type="text"
        />
      </div>

      {/* 2. 생년월일 */}
      <div>
        <input value={input.birth} onChange={onChangeBirth} type="date" />
      </div>

      {/* 3. 국적 */}
      <div>
        <select value={input.country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      {/* 4. 자기소개 */}
      <div>
        <textarea value={input.bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
