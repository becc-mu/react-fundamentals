// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

function Box({size, style, className = '', ...textProps}) {
  const sizeClassName = size ? `box box--${size}` : ''
  return (
    <div
      size={`size ${size}`}
      className={`box ${className} ${sizeClassName} `}
      style={{fontStyle: 'italic', ...style}}
      {...textProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
