import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text, setText] = useState("Welcome to Text Editor");

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
        console.log("Snake Case was clicked");
        let newText = text.replace(/\s+/g, '_').toLowerCase();
        setText(newText);
    }
    function handleKebabClick(){
        console.log("Kebab Case was clicked");
        let newText = text.replace(/_/g, '-').toLowerCase();
        setText(newText);
    }

    function handleCamelClick(){
        console.log("Camel Case was clicked");
         let newText = text
            .toLowerCase()
            .split(' ')
            .map((word, index) => {
                if (index === 0) return word; // Keep the first word in lowercase
                return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of subsequent words
            })
            .join(''); 
            setText(newText);
            /*
            let newText = text.toLowerCase();
            // Split the text into words and capitalize the first letter of each word except the first one
            let words = newText.split(' ');
            for (let i = 1; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            newText = words.join('');
            setText(newText); */
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/).join(' '); // This will remove extra spaces
        setText(newText);
    }
    function handleOnChange(event){  // able to change teh text in the textarea
        setText(event.target.value);
    }

    function handleCopy() {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("Text copied successfully!");
            })
            .catch((error) => {
                console.error("Failed to copy text: ", error);
            });
    }

    const wordlen = ()=>{
        return text.split(' ').filter((element)=>{return element.length!==0} ).length
    }
    return (
        <>
        <form className='container my-3'>       
            
            <div className="form-group">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="textBox" onChange={handleOnChange} rows="8" value={text} placeholder='Text Area'></textarea>
            </div>
            <button type='button' className="btn btn-primary m-3" onClick={handleUpClick}>UPPERCASE</button>
            <button type='button' className="btn btn-danger m-3" onClick={handleLowClick}>lowecase</button>
            <button type='button' className="btn btn-success m-3" onClick={handleSnakeClick}>snake_click</button>
            <button type='button' className="btn btn-warning m-3" onClick={handleKebabClick}>kebab-click</button>
            <button type='button' className="btn btn-light m-3" onClick={handleCamelClick}>camelCase</button>
            <button type='button' className="btn btn-secondary m-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button type='button' className="btn btn-primary m-3" onClick={handleCopy}>Copy Text</button>
        </form>
        <div className="container">
            <div className='flex flex'>
                <h2>Your Text Summary</h2>
                <p><b>{wordlen()}</b> words and <b>{text.length}</b> characters</p>
                <h4>Time to Read</h4>
                <p>{0.008* wordlen()} Minutes</p>
            </div>
            <h4>Preview</h4>
            <p>{text.length > 0 ? text : "Enter something in the text area to preview it here"}</p>
            
        </div>
        
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string
}

Textform.defaultProps = {
    heading: "Enter Text Here"
}
