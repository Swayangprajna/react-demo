import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const handleClick = () => {};
  return (
    <div className="container">
      <Button type="primary" onClick={handleClick}>
        Button Primary
      </Button>
      <br />
      <br />
      <Button type="primary" disabled>
        Primary disabled
      </Button>
      <br />
      <br />
      <Button type="secondary" onClick={handleClick}>
        sencondary button
      </Button>
      <br />
      <br />
      <Button type="secondary" disabled>
        secondary disabled
      </Button>
      <br />
      <br />
      <Button type="ternary" onClick={handleClick}>
        ternary button
      </Button>
      <br />
      <br />
      <Button type="ternary" disabled>
        ternary disabled
      </Button>
      {/* 
         -------------------------------INPUT SECTION ---------*/}
      <br />
      <br />
      <hr />
      <Input lable="lable name1" />
      <br />
      <br />

      <Input infoMsg="This is a info text" lable="lable name2" />
    </div>
  );
}

export default App;
