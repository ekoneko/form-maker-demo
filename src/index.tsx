import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {FormMaker, ProtoBench, WorkBench} from 'form-maker'
import {item as InputField} from './components/FormFIelds/Input'

const formFields = [InputField]

const workBenchStyle = {
  width: 100,
  height: 100,
  border: '1px dashed #ccc'
}

class App extends React.PureComponent<any, any> {
  state = {
    editForm: null
  }
  handleEditClick = (element) => {
    this.setState({editForm: element})
  }

  render() {
    const {editForm} = this.state

    return (
      <FormMaker>
        <ProtoBench protoList={formFields} />
        <WorkBench
          onEditClick={this.handleEditClick}
          style={workBenchStyle}
        />
        <div>{editForm}</div>
      </FormMaker>
    )
  }
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)
