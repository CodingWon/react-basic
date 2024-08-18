import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Register />
      <Register />
      {/*별개의 Register 컴포넌트가 각각 호출 되는데, 
      count 변수를 공유해서 사용한다.  */}
    </>
  );
}

export default App;
