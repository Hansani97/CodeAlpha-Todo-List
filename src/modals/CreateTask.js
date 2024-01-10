import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle ,save}) => {
    const [taskName,setTaskName]=useState('');
    const [description,setDescription]=useState('');

    const isSaveDisabled = !taskName.trim() || !description.trim();

    const handleSave =(e)=>{
        e.preventDefault()
        let taskObj={}
        taskObj['Name'] = taskName;
        taskObj["Description"] = description;

        save(taskObj);

    }

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
                <label>Task Name</label>
                <input type="text" maxlength="25" className="form-control" placeholder="Task here (max 25 characters)" 
                onChange={(e)=>setTaskName(e.target.value)} name="taskName" ></input>
            </div>
            <br/>
            <div className="form-group">
                <label>Description</label>
                <textarea rows="5" className="form-control" placeholder="Description here"
                onChange={(e)=>setDescription(e.target.value)} name="description"></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={handleSave} disabled={isSaveDisabled}> Save Task</Button>{" "}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateTask;
