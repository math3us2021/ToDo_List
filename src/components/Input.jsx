import React from "react";

export default(props)=> {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
        </>
    )
}

