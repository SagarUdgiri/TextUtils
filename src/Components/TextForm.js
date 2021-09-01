import React from 'react';
import { useState } from 'react';

const TextForm = (props) => {
    const [text,settext]=useState("Enter Text here")
    const [searchStr,setstr]=useState("")
     function ConverttoUpper() {
         let newText=text.toUpperCase();
       settext(newText);
     }
     function ConverttoLower() {
         let newText=text.toLowerCase();
       settext(newText);
     }

     function searchString() {
         let foundText=text.search(searchStr);
         if (foundText===-1)
         alert("String Not Found")
         else
         alert("String Found")            
     }

     function handleCopy() {
         let text=document.getElementById("myText")
         text.select()
         navigator.clipboard.writeText(text.value)
     }

     function handleExtraSpaces() {
         let newtext=text.split(/[ ]+/)
         settext(newtext.join(" "))
     }

     function handleonChange(event) {
         settext(event.target.value)
     }
    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="myText" rows="5" onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
            color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={ConverttoUpper}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={ConverttoLower}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <input type="text" className="mx-1" placeholder="Search for a Word" onChange={(event)=> setstr(event.target.value)}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',
            color:props.mode==='dark'?'white':'black'}}/>
            <button className="btn btn-primary mx-1" onClick={searchString}>Search</button>
            <button className="btn btn-primary mx-1" onClick={()=> settext("")}>Clear Text</button>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p> {text.split(' ').length} Words and {text.length} Characters</p>
                <p> {0.008 * text.split(' ').length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Some Text in Textarea'}</p>
            </div>
        </div>
    );
}

export default TextForm;
