import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  function undo() {
    let itm = localStorage.getItem(1);
    setText(itm || "");
  }

  const handldeOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    localStorage.setItem(1, newText);
  };

  // Load the saved text from localStorage when the component mounts
  useEffect(() => {
    const savedText = localStorage.getItem(1);
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handldeOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={speak}>
          Speak
        </button>
        <button onClick={undo}>Undo</button>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
