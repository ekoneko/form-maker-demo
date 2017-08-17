import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import {FormMaker, ProtoBench, WorkBench, EditBench} from 'form-maker'
import {item as InputField} from './components/FormFIelds/Input'
import {item as CheckboxField} from './components/FormFIelds/Checkbox'
import {item as RadioField} from './components/FormFIelds/Radio'
import {item as DatePicker} from './components/FormFIelds/DatePicker'
import {item as DateScope} from './components/FormFIelds/DateScope'

const formFields = [
  InputField,
  CheckboxField,
  RadioField,
  DatePicker,
  DateScope,
]

const protoBenchStyle = {
  width: '15%',
  float: 'left',
  padding: 10,
}

const workBenchStyle = {
  float: 'left',
  width: '60%',
  height: 500,
  border: '1px dashed #ccc',
  padding: 10,
}

const editBenchStyle = {
  float: 'left',
  width: '15%',
  padding: 10,
}

class App extends React.PureComponent<any, any> {
  handleChange = (results) => {
    // output struct
    console.log(results)
  }

  render() {
    return (
      <FormMaker>
        <ProtoBench
          protoList={formFields}
          style={protoBenchStyle}
        />
        <WorkBench
          onChange={this.handleChange}
          style={workBenchStyle}
        />
        <EditBench style={editBenchStyle} />
      </FormMaker>
    )
  }
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)
