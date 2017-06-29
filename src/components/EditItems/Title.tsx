import * as React from 'react'
import { Form, Input } from 'antd'
import { trim } from 'lodash'
import { IEditItemProps } from './interface'

const NAME = 'title'

export default class Title extends React.PureComponent<IEditItemProps, any> {
  handleChange = () => {
    setTimeout(() => this.handleAfterChange())
  }

  handleAfterChange = () => {
    const {form, onChange, name} = this.props;
    const {validateFields} = form;

    validateFields([name], (err, values) => {
      const value = trim(values[name]);
      onChange(name, value);
    });
  }

  render() {
    const {name, form: {getFieldDecorator}} = this.props
    return (
      <Form.Item label={NAME}>
        {getFieldDecorator(name, {
          rules: [
            {
              required: true,
              transform: trim,
              message: `please input ${NAME}`,
            },
          ]
        })(
          <Input
            onChange={this.handleChange}
            placeholder={`please input ${NAME}`}
          />
        )}
      </Form.Item>
    )
  }
}
