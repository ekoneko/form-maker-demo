import * as React from 'react'
import { Form, Switch } from 'antd'
import { trim } from 'lodash'
import { IEditItemProps } from './interface'

const NAME = 'Multiple'

export default class Multiple extends React.PureComponent<IEditItemProps, any> {
  handleChange = () => {
    setTimeout(() => this.handleAfterChange())
  }

  handleAfterChange = () => {
    const {form, onChange, name} = this.props;
    const {validateFields} = form;

    validateFields([name], (err, values) => {
      const value = values[name];
      onChange(name, value);
    });
  }

  render() {
    const {name, form: {getFieldDecorator}} = this.props
    return (
      <Form.Item label={NAME}>
        {getFieldDecorator(name)(
          <Switch
            defaultChecked={false}
            onChange={this.handleChange}
          />,
        )}
      </Form.Item>
    )
  }
}
