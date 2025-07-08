import React from 'react'

export default function Darktheme() {
    const handleDarkTheme = ()
  return (
    <div>
      <button type="button" className="btn btn-dark m-3" onClick={handleDarkTheme}>Dark Mode</button>
      <button type="button" className="btn btn-light m-3" onClick={handleLightTheme}>Light Mode</button>
    </div>
  )
}
