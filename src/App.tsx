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

      <Input infoMessage="This is a info text" lable="lable name2" />
      <br />

      <Input errorMessage="This field is mandatory" lable="lable name3" />
      <br />
      <Input lable="Enter your password" type="password" />
    </div>
  );
}

export default App;
