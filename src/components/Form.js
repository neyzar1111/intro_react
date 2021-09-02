import React,{useState,useEffect}  from "react"

const Form = ({onAdd, clear}) =>{

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState('');


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }


    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="newTodo">Add new task</label>
                <input id="newTodo"
                       type="text"
                       placeholder="Add Task"
                       value={text}
                       onChange={(e)=>setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="till">Day</label>
                <input id="till" type="date"
                       value={day}
                       onChange={(e)=>setDay(e.target.value)}
                />

            </div>



            <div className='form-control'>
                <label>Reminder</label>
                <input type="checkbox"
                       checked={reminder}
                       value={reminder}
                       onChange={(e)=>setReminder(e.currentTarget.checked)} />

            </div>

            <button type="submit">Save task</button>
            <button onClick={clear}>Clear</button>


        </form>
    )
}
export default Form