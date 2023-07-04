import React from 'react'

const HangmanWord = ({ word }) => {
  return (
    <div style={{ display: 'flex', gap: '.25em', fontSize:'6rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'monospace' }}>
      {word.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black'}}>
          {letter}
        </span>
      ))}
    </div>
  )
}

export default HangmanWord