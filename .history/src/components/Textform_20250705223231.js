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
    function handleSnakeClick(){
        let newText = text.replace(/\s+/g, '_').toLowerCase();
        setText(newText);
    }
    function handleKebabClick(){
        let newText = text.replace(/\s+/g, '-').toLowerCase();
        setText(newText);
    }
    function handleOnChange(event){  // able to change teh text in the textarea
        setText(event.target.value);
    }

    return (
        <>
        <form className='container my-3'>       
            
            <div className="form-group">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" value={text} placeholder='Text Area'></textarea>
            </div>
            <button type='button' className="btn btn-primary m-3" onClick={handleUpClick}>UPPERCASE</button>
            <button type='button' className="btn btn-danger m-3" onClick={handleLowClick}>lowecase</button>
            <button type='button' className="btn btn-success m-3" onClick={handleSnakeClick}>snake_click</button>
            <button type='button' className="btn btn-success m-3" onClick={handleSnakeClick}>kebab-click</button>
        </form>
        
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string
}

Textform.defaultProps = {
    heading: "Enter Text Here"
}
