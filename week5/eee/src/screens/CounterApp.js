import React, {useState} from "react";



const CounterApp = () => {

    const [count, setCount] = useState(0); // initializing number but cam be string/array

    const incrementOperaator = () => {
        setCount(count + 1);
    }


    const decrementOperaator = () => {
        setCount(count- 1);
    }


    return(
        <div>
            <h1>CounterApp</h1>
            <button onClick={incrementOperaator}>++</button>
            <p>{count}</p>
            <button onClick={decrementOperaator}>--</button>
        </div>
    );
}

export default CounterApp;