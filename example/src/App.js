import React from 'react'
import { useMyHook } from '@koheimukai/react-responsive'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App