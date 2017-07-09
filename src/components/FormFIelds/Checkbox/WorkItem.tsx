import * as React from 'react'
import { Form, Checkbox } from 'antd'
import {IWorkItemProps} from '../interface'
import {generateFormItemProps} from '../utils'

interface IOption {
  label: string;
  value: string;
}

const CheckboxGroup = Checkbox.Group

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
        <CheckboxGroup
          options={options}
        />
      </Form.Item>
    )
  }
}
