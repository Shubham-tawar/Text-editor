import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("Welcome to my Text Editor");

    function handleUpClick(){
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    function handleLowClick(){
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    function handleOnChange(event){  // able to change teh text in the textarea
        setText(event.target.value);
    }

    return (
        <form className='container my-3'>       
            
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" value={text} placeholder='Text Area'></textarea>
            </div>
            <button  className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-danger" onClick={handleLowClick}>lowecase</button>
        </form>
    )
}

Textform.propTypesropTypes = {
    heading: PropTypes.string
}

Textform.defaultProps = {
    heading: "Enter Text Here"
}
