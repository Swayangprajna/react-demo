import Button from "./components/Button";

function App() {
  const handleClick = () => {};
  return (
    <>
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
    </>
  );
}

export default App;
