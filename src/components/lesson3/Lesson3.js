import React, { useEffect, useState } from "react";
import NewTask from "./newTask/NewTask";
import Tasks from "./tasks/Tasks";
import useHttpRequest from "../../hooks/use-httpRequest";
import Card from "../UI/Card";

const Lesson3 = () => {
  const [tasks, setTasks] = useState([]);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks, // just renaming, still pointing to the same function
  } = useHttpRequest();

  useEffect(() => {
    /**
     * creating this function here, we avoid to use useCalback again
     */
    const trasnformTasks = (tasksOBJ) => {
      const loadedTasks = [];
      for (const taskKey in tasksOBJ) {
        loadedTasks.push({ id: taskKey, text: tasksOBJ[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-examples-c90fa-default-rtdb.firebaseio.com/tasks.json",
      },
      trasnformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  return (
    <React.Fragment>
      <Card>
        <p
          style={{
            fontWeight: "normal",
            fontSize: "1rem",
            fontFamily: "inherit",
          }}
        >
          in this example we learn how to make our custom hook perform requests
          to a database on firebase
        </p>
      </Card>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};

export default Lesson3;
