import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import Demo from "./components/demo/Demo";
import DemoList from "./components/demo_list/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [show, setShow] = useState(false);
  const [letShow, setLetShow] = useState(false);

  console.log("app");

  const showHandler = () => {
    setShow((prevState) => !prevState);
  };

  const demoHandler = useCallback(() => {
    // убирает лишний рендер useCallback возвращает мемозированную версию callback
    setLetShow((prevState) => !prevState);
  }, []);

  // const user = {
  //   name: 'Alina',
  //   age: 21
  // }

  const user = useMemo(() => {
    // (object) рендера не будет если не будет меняться
    console.log("usememo is working");
    return {
      name: "alina",
      age: 21,
    };
  }, []);

  return (
    <div className="app">
      <h1 id="inner" className="innerclass">
        Hi there!
      </h1>
      {show && <p>This is new</p>}
      <Button onClick={showHandler}>Click me</Button>
      <DemoList />
      <Demo onClick={demoHandler} {...user} />
    </div>
  );
}

export default App;
