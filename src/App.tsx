import Button from "./components/Button";

function App() {
  return (
    <>
      <Button type="primary">Button Primary</Button>
      <br />
      <br />
      <Button type="primary" disabled>
        Primary disabled
      </Button>
    </>
  );
}

export default App;
