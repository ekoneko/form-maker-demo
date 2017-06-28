import {Component} from 'react'
import {protoItemOnChange, protoItemParams} from 'form-maker'
import { WrappedFormUtils } from 'antd/lib/form/Form'

export interface IWorkItemProps {
  params: protoItemParams;
}

export interface IEditParamsProps extends Component{
  params: protoItemParams;
  onChange: protoItemOnChange;
  form?: WrappedFormUtils|null;
}
