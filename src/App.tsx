import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button text={"BUTTON DEAFAULT"} type={"primary"} subtype={"default"} />
      <br />
      <br />
      <Button text={"BUTTON HOVER"} type={"primary"} subtype={"hover"} />
    </>
  );
}

export default App;
