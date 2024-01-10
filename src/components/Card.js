import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask,updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#e2e9f4"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#f7e2bc"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#c6efc0"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#f5d0d1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#ddc4ef"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index);
        setModal(false)
        
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <>
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div className='card-icons'>
                    <i className = "far fa-edit " style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer", "paddingRight":"10px"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer" }} onClick={handleDelete } ></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
        </>
    );
};

export default Card;