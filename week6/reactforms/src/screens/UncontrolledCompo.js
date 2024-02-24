import { useRef } from "react";

const UncontrolledCompo = () => {
    let txtName =  useRef(null)

    const onNameChangeHandler = (event) => {
        console.log(`Name input changed ${txtName}`);

        txtName.current.value = event.target.value
        console.log(txtName.current.value);
    }

    return(
        <div>
            <label>Enter name: </label>
            <input type="text" name="txt_name" onChange={onNameChangeHandler} ref={txtName}></input>

            <p>txtName.current.value</p>
        </div>
    );
}

export default UncontrolledCompo;