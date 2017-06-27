import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {FormMaker, ProtoBench, WorkBench} from 'form-maker'

function App() {
  return (
      <FormMaker>
          <ProtoBench />
          <WorkBench />
      </FormMaker>
  )
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)
