import React from "react";
import "./Componente.css";

export default(props)=> {
    return (
        <>
            <div className="input">
               <input className="btn btn-light"  type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
            </div>
        </>
    )
}

