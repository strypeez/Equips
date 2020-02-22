import React from 'react';

const Overlay = ({color}) => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100px',
    width: '100px',
    zIndex: '1',
    opacity: '0.5',
    backgroundColor: color
  }

  return(
    <div style={overlayStyle}></div>
  )
}

export default Overlay
