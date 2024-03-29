import { useState } from "react"

function InputExample() {
    const [form, setForm] = useState({name:'', surname:''})
    const formChange = (event)=> setForm({...form, [event.target.name]: event.target.value})
    return( 
        <div>
            Please enter a name: <br />
            <input name='name' value={form.name} onChange={formChange}/>
            <br />
            Please enter a surnamename: <br />
            <input name='surname' value={form.surname} onChange={formChange}/>

            <br /> 
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample