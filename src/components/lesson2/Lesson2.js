import React from "react";
import BackwardCounter from "./BackwardCounter";
import ForwardCounter from "./ForwardCounter";
import Card from '../UI/Card'
const Lesson2 = () => {
  return (
    <React.Fragment>
      <Card>
        <p
          style={{
            fontSize: "1rem",
            fontFamily: "inherit",
            fontWeight: "normal",
          }}
        >
          in this lesson we learn how to use a simple custom hook
        </p>
      </Card>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
};

export default Lesson2;
