import { useState } from "react";

const ControlledCompo = () => {
    const [name, setName] = useState("")
    const onNameChangeHandler = (event) => {

        if (event.target.value !== "admin") {
            setName(event.target.value); 
        }
        else {
            setName("unknown")
        }
        
    }

    return(
        <div>
            <label>Enter name: </label>
            <input type="text" name="txt_name" onChange={onNameChangeHandler}></input>

            <p>{name}</p>
        </div>
    );
}

export default ControlledCompo;