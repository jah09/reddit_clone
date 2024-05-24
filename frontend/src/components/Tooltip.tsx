import React from 'react'

function Tootip({ text }) {
  return (
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-sm rounded">
          {text}
      </div>
  )
}

export default Tootip