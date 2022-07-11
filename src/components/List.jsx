import React from "react";
import "./Componente.css";



export default (props) => {
  return (
    <>
      {/* <div class="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
           <label class="form-check-label" for="defaultCheck1">
           Checkbox padrão
           </label>
          </input>
        </div> */}
      <ul  className="lista" >
        {props.itemList.map((item, index) => (
          
          <li className="alert alert-dark"  style={{listStyleType: "none"}} key={index} >{item.name} {item.date} </li>
          
        ))}
      </ul>
    </>
  )
};