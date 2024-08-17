import "./App.css";

/*
  컴포넌트 규칙
    - 첫글자 대문자
*/

// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

const Header = () => {
  // 자식 컴포넌트 .. Footer
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

function App() {
  // 부모 컴포넌트 (최상의 조상 - Root 컴포넌트)
  return (
    <>
      <Header />
      <h1>안녕 리액트</h1>
    </>
  );
}

export default App;
