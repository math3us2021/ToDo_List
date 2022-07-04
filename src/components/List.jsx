import React from "react";


export default (props) => {
  return (
    <>
    
      <ul className="todo-list">
        {props.itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
};