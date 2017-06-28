import * as React from 'react'
import { Form, Input } from 'antd'
import {mapValues, trim} from 'lodash'
import {IEditParamsProps} from '../interface'
import FormCreate from '../../formCreate'

class EditParam extends React.PureComponent<IEditParamsProps, any> {
  render() {
    const {form: {getFieldDecorator}} = this.props
    return (
      <Form>
        <Form.Item label="title">
          {getFieldDecorator(name, {
            // onChange: this.handleChange,
            rules: [
              {
                required: true,
                transform: trim,
                message: 'please input title',
              },
            ]
          })(
            <Input
              placeholder="please input title"
            />
          )}
        </Form.Item>
      </Form>
    )
  }
}
function mapPropsToFields(props) {
  return mapValues(props.params, value => ({value}))
}
export default FormCreate({mapPropsToFields})(EditParam)
