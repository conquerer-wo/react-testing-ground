import React, { useState, useEffect } from 'react';
import "./body.css";

function Body(props) {
  const value = props.value;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (value && value.length > 0) {
      setShow(true); // 🔁 Trigger re-render when data arrives
    } else {
      setShow(false);
    }
  } ,[value]); // 🔁 Runs every time 'value' prop changes
console.log(value)
  return (
    <div className="bd">
      {show &&
        value?.map((item, index) => (
          <div key={index}>
            <img src={item.Poster} alt={item.Title} />
            <h1>{item.Title}</h1>
            <p>{item.Type}</p>
            <p>{item.Year}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Body;
