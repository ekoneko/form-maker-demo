import {protoItemOnChange} from 'form-maker'
import { WrappedFormUtils } from 'antd/lib/form/Form'

export interface IEditItemProps {
  name: string;
  form: WrappedFormUtils;
  onChange: protoItemOnChange;
}
