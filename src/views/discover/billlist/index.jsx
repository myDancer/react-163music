import React from 'react'
import BillItem from '../billItem'
import './style.styl'

const BillList = props => (
  <div className="billlist-wrap">
    {props.billList.map(item => (
      <BillItem key={item.link} billItem={item} />
    ))}
  </div>
)
export default BillList
