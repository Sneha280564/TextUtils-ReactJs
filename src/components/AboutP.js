import React, { useState } from "react";

export default function AboutP() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor : 'white',
    })

    const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    const toggleStyle = ()=>{
       if(myStyle.color === 'black')
       {
        setMyStyle({
            color: 'white', 
            backgroundColor : 'black',
            border: '1px solid white'
       })  
       setBtnText("Enable Light Mode")
       }
       else{
        setMyStyle({
            color: 'black',
            backgroundColor : 'white', 
        })
        setBtnText("Enable Dark Mode")
       }
       
    }

  return (
    <div className="container" style = {myStyle}>
        <h2 className = "my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style = {myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button" style = {myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or changing the cases of the words.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style = {myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse" style = {myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style = {myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Convenience
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style = {myStyle}>
              It is a very convenient, easy to use website compatible with different screen sizes. 
            </div>
          </div>
        </div>
      </div>

<div className="container my-3">
<button onClick = {toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
    </div>      
    </div>
  );
}
