import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!", "success"); 
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!", "success"); 
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

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to Clipboard!", "success"); 
  };

  const handldeOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    localStorage.setItem(1, newText);
  };

  useEffect(() => {
    const savedText = localStorage.getItem(1);
    if (savedText) {
      setText(savedText);
    }
  }, []);

  
  const Italic = () => {
    if (mystyle.fontStyle === "normal") {
      setmystyle({ ...mystyle, fontStyle: "italic" });
      props.showAlert(" Text changed to Italics!", "success");
    } else {
      setmystyle({ ...mystyle, fontStyle: "normal" });
      props.showAlert(" Italic style removed!", "success");
    }
  };  

  const bold = ()=>{
    if(mystyle.fontWeight==="400")
    {
      setmystyle({ ...mystyle, fontWeight: "bolder" });
      props.showAlert(" Text changed to Bold!", "success");
    }
    else{
      setmystyle({ ...mystyle, fontWeight: "400" });
      props.showAlert(" Bold style removed!", "success");
    }
}

  const [mystyle, setmystyle] = useState({
    fontStyle: "normal",
    fontWeight: '400'
  });

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handldeOnChange}
            style={{
              ...mystyle,
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={Italic}>
          Change to Italic
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={bold}>
          Bold Text
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-secondary mx-2 my-1" onClick={undo}>
          Undo
        </button>
        <button className="btn btn-warning mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-2 my-1"  style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
        {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview."}</p>
      </div>
    </>
  );
}