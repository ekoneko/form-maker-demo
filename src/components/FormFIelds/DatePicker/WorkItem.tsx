import * as React from 'react'
import { Form, DatePicker } from 'antd'
import {IWorkItemProps} from '../interface'
import {generateFormItemProps} from '../utils'

export default class WorkItem extends React.PureComponent<IWorkItemProps, any> {
  render() {
    const {params} = this.props

    return (
      <Form.Item
        {...generateFormItemProps(params)}
      >
        <DatePicker />
      </Form.Item>
    )
  }
}
