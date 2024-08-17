import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

/*
  컴포넌트 규칙
    - 첫글자 대문자
*/

function App() {
  // 부모 컴포넌트 (최상의 조상 - Root 컴포넌트)
  return (
    <>
      <Button text={"메일"} color={"red"}></Button>
      <Button text={"카페"}></Button>
      <Button text={"블로그"}></Button>
    </>
  );
}

export default App;
