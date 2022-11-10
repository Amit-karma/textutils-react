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
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("First letter got capitalized","success");
  }
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
  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
  <button type="button" className="btn btn-warning" onClick={handleLwClick} >Convert to Lowercase</button>
  <button type="button" className="btn btn-success"  onClick={handleCpClick} >Capitalize</button>
  <button type="button" className="btn btn-danger"  onClick={handleClearClick} >Clear</button>
</div>
    </div>
    <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length - 1} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter some text above to preview it here'}</p>
    </div>
    </>
  )
}
