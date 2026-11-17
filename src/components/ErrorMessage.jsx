import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div role="alert" className="p-4 text-center text-red-400">
      {message}
    </div>
  )
}

export default ErrorMessage
