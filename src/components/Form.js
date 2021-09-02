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
            <div className="form-control todos">

                <input id="newTodo"
                       className="basic-slide"
                       type="text"
                       placeholder="Add Task"
                       value={text}
                       onChange={(e)=>setText(e.target.value)}
                />
                <label htmlFor="newTodo">Add new task:</label>
            </div>
            <div className='form-control'>
                <label className="label">
                <input type="checkbox"
                       className="option-input checkbox"
                       checked={reminder}
                       value={reminder}
                       onChange={(e)=>setReminder(e.currentTarget.checked)} />
                Reminder</label>
            </div>

            <div className="form-control ">
                <label htmlFor="till">Day</label>
                <input id="till" type="date"
                       value={day}
                       onChange={(e)=>setDay(e.target.value)}
                />

            </div>


            <button type="submit">Save task</button>
            <button className="clearBtn" onClick={clear}>Clear</button>


        </form>
    )
}
export default Form