import React from 'react'
import { savePost } from '../api'
function Editor() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    setIsDisabled(true)

    const { title, content, tags } = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split()
    }
    savePost(newPost).then(() => {
      setIsDisabled(false)
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" name="title" />

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" />

      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" name="tags" />

      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  )
}

export { Editor }
