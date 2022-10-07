import React, {useState} from 'react'

let flag = true;
export default function TextForm(props) {

    let newText;
    

    const handleOnClick = () => {
        // console.log("Entered Text : " + text);
        if(flag === true)
        {
            newText = text.toUpperCase();
            setbuttonText('Convert To Lowercase');
            props.showAlert('Converted to uppercase', 'success');
        }
        else{
            newText = text.toLowerCase();
            setbuttonText('Convert To Uppercase');
            props.showAlert('Converted to lowercase', 'success');
        }
        flag = !flag;
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyText = () => {
        // console.log("going to copy defined text")
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard', 'success');
    }

    const handleClearText = () => {
        // console.log("going to clear defined text")
        setText('');
        props.showAlert('Text has been cleared', 'success');
    }
    
    const [text, setText] = useState('');
    const [buttonText, setbuttonText] = useState('Convert To Uppercase');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={handleOnClick}>{buttonText}</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleCopyText}>Copy to clipboard</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleClearText}>Clear Text</button>
    </div>
    <div className='container my-2'>
        <h3>Your Text Summary</h3>
        <p>{text.split(' ').filter(word => word !== '').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter(word => word !== '').length} Minutes read</p>
    </div>
    </>
  )
}

TextForm.defaultProps = {
    heading : 'Enter the Text'
};