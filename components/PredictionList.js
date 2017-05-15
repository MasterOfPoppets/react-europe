import React from 'react'

const PredictionList = ({ x }) => (
  <ul>
    <li>Strongly-typed languages compiling to JS</li>
    {x > 1 && <li>Tooling</li>}
    {x > 2 && <li>UI Performance  - Fiber, WebAssembly</li>}
  </ul>
)

export default PredictionList
