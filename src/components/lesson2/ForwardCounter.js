import Card from "../UI/Card";
import useCounter from "../../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
