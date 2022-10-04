import React, { useState } from 'react'



export default function TextForm(props) {
    const click = ()=>{
       // console.log("upper case is clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to upper case", "success");
    }
    const clicklower = ()=>{
      // console.log("upper case is clicked"+text);
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Convert to lower case", "success");
   }
//    const countsentences = ()=>{
//     // console.log("upper case is clicked"+text);
//      let newText = text.countsentences();
//      setText(newText);
//  }
    const clickonchange = (event)=>{
        //console.log("upper case is clicked");
        setText(event.target.value);   
    }
    const handlecopy = ()=>{
      //console.log("I am copy");
      var text = document.getElementById("text");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!", "success");  
  }
  const cleartext = ()=>{
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared!", "success");

  }

  const handleExtraSpaces = ()=> {
    //console.log("hjjjsgdg");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  }
    const [text, setText] = useState('');
   // text = "hiiii" ;//wrong 
    //setText("hiiii"); //true
  return (
    <>
     <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="my-4">
        <textarea className="form-control" id="text" value={text} onChange ={clickonchange} style = {{backgroundColor: props.mode==='dark'?'#071834':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-2" onClick ={click}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick ={clicklower}>Convert to lower case</button> 
        <button className="btn btn-primary mx-2" onClick ={handlecopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick ={handleExtraSpaces}>Remove Extra spaces</button> 
        <button className="btn btn-primary mx-2" onClick ={cleartext}>Clear Text</button>

        {/* <button className="btn btn-primary mx-2" onClick ={countsentences}>Count sentences</button>  */}
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box about to preview it here."}</p>
    </div>
    </>
   
  )
}
