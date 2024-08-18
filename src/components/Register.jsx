import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);

  const onChange = (e) => {
    countRef.current++; // 수정 횟수를 저장 확인 할 수 있다.
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
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
