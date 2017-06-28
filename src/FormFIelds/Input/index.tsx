import * as React from 'react'
import {IProtoListItem} from 'form-maker'
import ProtoItem from './ProtoItem'
import WorkItem from './WorkItem'
import EditParam from './EditParam'

export const item: IProtoListItem = {
  type: 'input',
  params: {},
  renderProto: () => {
    return <ProtoItem />
  },
  renderWork: (params) => {
    return <WorkItem params={params} />
  },
  renderEditParam: (params, onChange) => {
    return <EditParam params={params} onChange={onChange} />
  },
}
