import Section from "../../UI/Section";
import TaskForm from "./TaskForm";
import useHttpRequest from "../../../hooks/use-httpRequest";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTask } = useHttpRequest();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    // here we don't need useCallback cause this will only run when a button is clicked. We don't need work with useEffect
    sendTask(
      {
        url: "https://react-examples-c90fa-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText) //pre config to pass taskText to the createTask function
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
