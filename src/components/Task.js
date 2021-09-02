import {useState} from "react";

const Task = ({ task, checkTask}) => {
    return (
        <div className="task">
                <input type="checkbox"

                       onChange={(e)=>checkTask(e.currentTarget.checked,task.id)}
                       // onChange={(e)=>setReminder(e.currentTarget.checked)}
                />
            {task.text}
            <p>{task.day}</p>
        </div>
    )
}
export default Task