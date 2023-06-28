import React from 'react'

const Head = (
  <div style={{
    width: '50px',
    height: '50px', 
    borderRadius: '100%',
    border: '10px solid black',
    position: 'absolute',
    top: '50px',
    right: '-30px'
  }}></div>
)

const HangmanDrawing = () => {
  return (
    <div style={{ position: 'relative'}}>
      {Head}
      <div className="" style={{ height: '50px', width: '10px', background: 'black', position: 'absolute', top: 0, right: 0}}/>
      <div className="" style={{ height: '10px', width: '250px', background: 'black', marginLeft: '120px'}}/>
      <div className="" style={{ height: '400px', width: '10px', background: 'black', marginLeft: '120px'}}/>
      <div className="" style={{ height: '10px', width: '250px', background: 'black'}}/>

    </div>
  )
}

export default HangmanDrawing