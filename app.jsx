import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import Main from "./src/components/main";

export function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
