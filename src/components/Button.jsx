import React from "react";
import "./Componente.css";


export default (props)=> {
        return (
        <>
            <div className="button">
               <button className="btn btn-light" type={props.type} onClick={props.onClick}>{props.children}</button>  
            </div>      
        </>
)}

