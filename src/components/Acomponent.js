import React, { Component } from "react";
import Bcomponent from "./Bcomponent";
const Acomponent = () => {
    const data=2;
    return (
        <div>
            <Bcomponent data={data} />
        </div>
    )
}
export default Acomponent;