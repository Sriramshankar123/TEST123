import { useState } from "react";
function Bcomponent(props) {
    let [data, setdata] = useState(props.data)
    data = 2;

    return (
        <div>
            <h2>{data}</h2>
            <button> onClick={
                setdata((currentval) => {
                    return currentval += 10
                })
            }
                Increment</button>
        </div>
    )


}


export default Bcomponent;
