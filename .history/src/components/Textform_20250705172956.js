import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("Welcome to my Text Editor");
    function handleUpClick(){
        let newText = text.toUpperCase();
        setText(newText);
    }

    function handleLowClick(){
        let newText = text.toLowerCase();
        setText(newText);
    }

    return (
        <form className='container my-3'>       
            
            <div className="form-group">
                <label htmlForfor="exampleFormControlTextarea1">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={} rows="3" value={text} placeholder='Text Area'></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-secondary" onClick={handleLowClick}>lowecase</button>
        </form>
    )
}

Textform.propTypesropTypes = {
    heading: PropTypes.string
}

Textform.defaultProps = {
    heading: "Enter Text Here"
}
