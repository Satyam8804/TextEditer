import React, {useState} from 'react'

export default function Textform
(props) {
    
    const [text , setText] = useState('');
        const handleUpClick=() =>{
            
            let newText =text.toUpperCase();
            setText(newText);
            props.showAlert(" Converted to Upercase ","success ");
        }
        const handleDownClick=() =>{
            
            let newText =text.toLowerCase();
            setText(newText);
            props.showAlert(" Converted to Lowercase ","success ");
        }
        const handleClearClick=() =>{
            
            let newText ="";
            setText(newText);
            props.showAlert("  ","success ");
        }
        const handleReadClick=() =>{
            
            let msg = new SpeechSynthesisUtterance();
             msg.text = text;
            window.speechSynthesis.speak(msg);
            props.showAlert(" Reading... ","success ");
        }

        const handleCopyClick=() =>{
            
            
            let newText = text;
  
            navigator.clipboard.writeText(newText);
            
            props.showAlert(" Text copied to Clipboard ","success ");

  /* Alert the copied text */
            
           
        }

        const handleOnChange=(event) =>{
          
            setText(event.target.value);
        }

   
    // setText("Hello , My Name Is Satyam Kumar"); // correct way to change the state
    return (
        <>
    <div className='container'>
        <div className="my-3">
        <label htmlFor="myBox">{props.heading}</label>
        <textarea className="form-control my-2" value={text} id="myBox" row="8" placeholder='Enter Text Here' onChange={handleOnChange}></textarea>
        
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} >Copy To Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReadClick} >Read</button>
    </div>
    <div className="container my-3">
            <h2>Text Summaries :</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
    </div>
    <div className='container'>
        <h2>
        Preview     
        </h2>
        <p>{text.length>0?text:"Enter text above to preview it here - "}</p>
    </div>
    </>
  )
    }
