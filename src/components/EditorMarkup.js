import React from 'react'

function Editor() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    setIsDisabled(true)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" />

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" />

      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" />

      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  )
}

export { Editor }
