import { useState } from "react";
// 간단한 회원가입 폼
/*
    1. 이름
    2. 생년월일
    3. 국적
    4. 자기소개
*/

const Register = () => {
  const [name, setName] = useState("이름"); // 초기값 설정 !!
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("자기소개");

  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    console.log(e.target.value);
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    console.log(e.target.value);
    setBio(e.target.value);
  };

  return (
    <div>
      {/* 1. 이름  */}
      <div>
        <input
          value={name}
          onChange={onChangeName}
          placeholder="이름"
          type="text"
        />
      </div>

      {/* 2. 생년월일 */}
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      {/* 3. 국적 */}
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      {/* 4. 자기소개 */}
      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
