import React from 'react'

import About from './pages/About'

export default function AboutContainer () {
  return (
    <About />
  )
}

// Containers can be connected to the store
// and pass necessary props to the page impl.
// (pure components)
/* export default connect()(AboutContainer) */
