import React from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  return (
    <form className='container my-3'>       
        
        <div class="form-group">
            <label for="exampleFormControlTextarea1">{props.heading}</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Text Area'></textarea>
            <button className="btn btn-primary">UPPERCASE</button>
            button.
        </div>
    </form>
  )
}

Textform.propTypesropTypes = {
    heading: PropTypes.string
}

Textform.defaultProps = {
    heading: "Enter Text Here"
}
