import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const Hello = () => {
//   return <div>Hello</div>;
// };

/*
  관례상 App 컴포넌트를 root 컴포넌트로 설정한다.
*/

createRoot(document.getElementById("root")).render(<App />);
