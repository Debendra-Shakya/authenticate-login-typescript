import React from 'react'

const profile = () => {
  const name=localStorage.getItem('name')
  alert(`${name}, welcome to profile page`)
  return (
    <div>profile page</div>
  )
}

export default profile