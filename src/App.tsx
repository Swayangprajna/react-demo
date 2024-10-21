import Button from "./components/Button";

function App() {
  const onClick = () => {};
  return (
    <>
      <Button type="primary" onClick={onClick}>
        Button Primary
      </Button>
      <br />
      <br />
      <Button type="primary" disabled>
        Primary disabled
      </Button>
    </>
  );
}

export default App;
