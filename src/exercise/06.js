// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  const handleChange = event => {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <span style={{color: 'red'}}>{error}</span>
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username} `)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
