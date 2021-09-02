import Task from "./Task"
const Tasks = ({tasks, checkTask}) =>{
    return(
        <>
            {tasks.map((task)=> (
                    <Task key={task.id}
                          task={task}
                          checkTask={checkTask}
                    />
                )
            )}
        </>
    )
};
export default Tasks