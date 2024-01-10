import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const date = new Date();

  useEffect(() => {
    allTask();
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    allTask();
  };
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    allTask();
  };

  const allTask = () => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  };

  return (
    <>
      <div className="header text-center">
        <h3>To Do List</h3>
        <button className="btn btn-primary btn-sm mt-2" onClick={() => setModal(true)}>
          + Add Task
        </button>
      </div>
   
      <div className="task-container">
        <h5>All Task</h5>
        <p>{date.toDateString()}</p>
        <div className="task-item">
          {taskList &&
            taskList.map((obj, index) => (
              <Card
                taskObj={obj}
                key={index}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))}
        </div>
      </div>
      <div className="footer">
       Every task completed is a small victory. Keep going💪!
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default ToDoList;
