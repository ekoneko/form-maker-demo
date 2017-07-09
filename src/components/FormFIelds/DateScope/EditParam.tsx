import * as React from 'react'
import { Form } from 'antd'
import { mapValues } from 'lodash'
import {IEditParamsProps} from '../interface'
import {generateEditParamProps} from '../utils'
import FormCreate from '../../../formCreate'
import {Title} from '../../EditItems'

class EditParam extends React.PureComponent<IEditParamsProps, any> {
  render() {
    return (
      <Form>
        <Title {...generateEditParamProps('title', this.props)} />
      </Form>
    )
  }
}
function mapPropsToFields(props) {
  return mapValues(props.params, value => ({value}))
}
export default FormCreate({mapPropsToFields})(EditParam)
