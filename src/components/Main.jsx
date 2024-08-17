/*
    JSX 주의 사항
        1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (if , for 사용불가)
        2. 숫자, 문자열, 배열 값만 렌더링 된다. / 아래 내용은 렌더링 되지 않는다.
                  {true}
                  {undefined}
                  {null}
                  {obj} :  Error: Objects are not valid as a React child
        3. 모든 태그는 닫혀 있어야 한다.
            <img></img> 이미지도 닫힘 태그가 있어야한다.
        4. 최상의 태그는 반드시 하나여야 한다.
*/

const Main = () => {
  const number = 10;
  const obj = { a: 1 };

  return (
    // <div></div>
    <>
      <img></img>
      <h1>main</h1>
      <h2>{number + 10}</h2>
      <h3>{number % 2 === 0 ? "짝수" : "홀수"}</h3>
      {10}
      <br />
      {/* {if(){}} */}
      {/* {for(){}} */}
      {[1, 2, 3]}
      {true}
      {undefined}
      {null}
      {obj.a}
    </>
  );
};

export default Main;
