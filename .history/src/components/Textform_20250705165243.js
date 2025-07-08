import React from 'react'
import PropTypes from 'prop-types'

export default function Textform() {
  return (
    <form className=''>       
        
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </form>
  )
}

Textform.propTypesropTypes = {
    heading: PropTypes.string
}
