// import {useState} from "react";

const Task = ({ task, checkTask}) => {
    return (
        <div className="task ">
            <label className="label">


                <input type="checkbox"
                       checked={task.checked}
                       onChange={(e)=>checkTask(e.currentTarget.checked,task.id)}
                       className="option-input checkbox"
                />
            {task.text}
            </label>
            <p>{task.day}</p>
        </div>
    )
}
export default Task