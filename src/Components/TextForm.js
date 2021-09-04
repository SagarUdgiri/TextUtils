import React from 'react';
import { useState } from 'react';

const TextForm = (props) => {
    let textLength=0
    const [text,settext]=useState("")
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
        console.log(searchStr.length)
        if (searchStr!=="")
        {let foundText=text.search(searchStr);
        if (foundText===-1)
        props.showalert(" String Not Found",'warning')
        else
        props.showalert(" String Found",'success') }     
        else
        props.showalert(" Invalid Word to Search",'warning')
     }

     function handleCopy() {
         let text=document.getElementById("myText")
         text.select()
         navigator.clipboard.writeText(text.value)
         document.getSelection().removeAllRanges();
         props.showalert(" Copied to Clipboard :)",'success')
     }

     function handleExtraSpaces() {
         let newtext=text.split(/[ ]+/)
         settext(newtext.join(" "))
         props.showalert(" Extra Spaces are Removed :)",'success')
     }

     textLength=text.split(' ').filter(element => {return element.length!==0}).length
    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-3">{props.heading}👇👇</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="myText" rows="8" onChange={event => settext(event.target.value)} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
            color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ConverttoUpper}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ConverttoLower}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={()=> settext("")}>Clear Text</button>
            <input type="text" className="form-control-sm mx-1 my-1" placeholder="Search for a Word" onChange={(event)=> setstr(event.target.value)}
            style={{backgroundColor:props.mode==='dark'?'rgb(19, 70, 110)':'white',
            color:props.mode==='dark'?'white':'black'}}/>
            <button disabled={searchStr.length===0} className="btn btn-primary mx-1" onClick={searchString}>Search</button>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p> {textLength} Words and {text.length} Characters including space' '</p>
                <p> {textLength<=0?0:.008 * text.split(' ').filter(element => {return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{textLength>0?text:'Nothing to Show! Type Some Text in Textarea'}</p>
            </div>
        </div>
    );
}

export default TextForm;
