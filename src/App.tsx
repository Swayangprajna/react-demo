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
    </>
  );
}

export default App;
