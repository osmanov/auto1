import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  const [sortContainer] = useState(document.createElement('div'))
  useEffect(() => {
    let root = document.getElementById('sort_section_portal')
    root.appendChild(sortContainer)
    return function cleanup() {
      root.removeChild(sortContainer)
    }
  }, [sortContainer])

  return ReactDOM.createPortal(children, sortContainer)
}
export default Portal
