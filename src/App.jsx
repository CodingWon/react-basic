import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

/*
  컴포넌트 규칙
    - 첫글자 대문자
*/

const buttonProps = {
  text: "카페",
  color: "blue",
  a: 1,
  b: 2,
  c: 3,
};

function App() {
  // 부모 컴포넌트 (최상의 조상 - Root 컴포넌트)
  return (
    <>
      <Button text={"메일"} color={"red"} a={1} b={2} c={3} />
      <Button {...buttonProps} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
