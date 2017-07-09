import * as React from 'react'
import {IProtoListItem} from 'form-maker'
import ProtoItem from './ProtoItem'
import WorkItem from './WorkItem'
import EditParam from './EditParam'

export const item: IProtoListItem = {
  type: 'checkbox',
  params: {
    title: 'Checkbox',
    options: 'option1,option2,option3',
  },
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
