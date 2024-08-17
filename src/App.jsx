import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

/*
  컴포넌트 규칙
    - 첫글자 대문자
*/

function App() {
  // 부모 컴포넌트 (최상의 조상 - Root 컴포넌트)
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
