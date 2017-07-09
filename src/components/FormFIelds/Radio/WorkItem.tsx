import * as React from 'react'
import { Form, Radio } from 'antd'
import {IWorkItemProps} from '../interface'
import {generateFormItemProps} from '../utils'

interface IOption {
  label: string;
  value: string;
}

const RadioGroup = Radio.Group

export default class WorkItem extends React.PureComponent<IWorkItemProps, any> {
  render() {
    const {params} = this.props
    const options: IOption[] = params.options
      .split(',')
      .map(opt => {
        const val = opt.trim()
        if (!val) return null
        return {
          label: val,
          value: val,
        }
      })
      .filter(opt => !!opt)

    return (
      <Form.Item
        {...generateFormItemProps(params)}
      >
        <RadioGroup
          options={options}
        />
      </Form.Item>
    )
  }
}
