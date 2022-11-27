import React, {useState} from 'react'

export default function TextForm(props) {  
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLwClick=()=>{
    // console.log("lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleCpClick=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");
  }
  // const handleCpClick=()=>{
  //   let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  //   setText(newText);
  //   props.showAlert("First letter got capitalized","success");
  // }
  const handleClearClick=()=>{
    let newText = '';
    setText(newText);
    props.showAlert("YOUR TEXT IS CLERED!!!!","warning");
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Write something');
  // text="new text"; worng way to change the state
  // setText("hello"); correct way
  return ( 
    <> 
    <div>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#121212' ,color:props.mode==='light'?'black':'white' }}  value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
  </div>
  <div>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-warning mx-1 my-1" onClick={handleLwClick} >Convert to Lowercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-success mx-1 my-1"  onClick={handleCpClick} >Copy</button>
  <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-1"  onClick={handleClearClick} >Clear</button>
</div>
    </div>
    <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 *text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
