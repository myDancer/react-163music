import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const BillItem = props => (
  <dl className="bill-item">
    <dt className="bill-top">
      <div className="i-wrap"><img alt="图片" src={props.billItem.imgUrl} /><Link to={props.billItem.link} className="msk" /></div>
      <div className="t-wrap">
        <Link className="title" to={props.billItem.link}>{props.billItem.billTitle}</Link>
        <div className="btn">
          <Link className="t-icn icn-play" to={props.billItem.link} />
          <Link className="t-icn icn-collect" to={props.billItem.link} />
        </div>
      </div>
    </dt>
    <dd>
      <ol>
        {props.billItem.singList.map((item, index) => (
          <li key={item.link}>
            <span className="nr">{index + 1}</span>
            <Link className="nm" to={item.link}>{item.songName}</Link>
            <div className="oper">
              <button className="init-icn icn-ply" />
              <button className="init-icn icn-add" />
              <button className="init-icn icn-colect" />
            </div>
          </li>
        ))}
      </ol>
      <div className="more" >
        <Link to={props.billItem.link}>查看全部 &gt;</Link>
      </div>
    </dd>
  </dl>
)
export default BillItem

