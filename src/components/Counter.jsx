import {useState } from "react";

const Counter = (props) => {
	
    const [countState, setCountState] = useState(77)
	
		function incCount(){
			setCountState(countState + props.incCount)	
		}
    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incCount}</button>
        </div>
    )
}
export default Counter;