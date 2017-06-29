import * as React from 'react'
import { Form, Input } from 'antd'
import {IWorkItemProps} from '../interface'
import {generateFormItemProps} from '../utils'

export interface IInputWorkItemProps extends IWorkItemProps {
  placeholder?: string
}

export default class WorkItem extends React.PureComponent<IInputWorkItemProps, any> {
  render() {
    const {params} = this.props
    return (
      <Form.Item
        {...generateFormItemProps(params)}
      ><Input
        placeholder={params.placeholder}
      /></Form.Item>
    )
  }
}
