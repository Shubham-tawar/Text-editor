import React from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    function
    <form className='container my-3'>       
        
        <div className="form-group">
            <label htmlForfor="exampleFormControlTextarea1">{props.heading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Text Area'></textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-secondary" onClick={handleLowClick}>lowecase</button>
        </div>
    </form>
  
}

Textform.propTypesropTypes = {
    heading: PropTypes.string
}

Textform.defaultProps = {
    heading: "Enter Text Here"
}
