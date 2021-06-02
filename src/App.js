import React from "react";
import "./App.css";
import Lesson1 from "./components/lesson1/Lesson1";
import Lesson2 from "./components/lesson2/Lesson2";
import Lesson3 from "./components/lesson3/Lesson3";

function App() {
  return (
    <React.Fragment>
      <Lesson1 />
      <hr />
      <Lesson2 />
      <hr />
      <Lesson3 />
    </React.Fragment>
  );
}

export default App;
