import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const NewDisk = props => (
  <div className="newdisk">
    <div className="inner">
      <a className="disk-next l-btn" href="">&nbsp;</a>
      <div className="n-disk">
        <ul>
          {props.diskList.map(item => (
            <li key={item.link}>
              <img alt="图片" src={item.imgUrl} />
              <Link className="bg-img" to={item.link} />
              <p><Link className="disk-link-1 disk-link" to={item.link}>{item.title}</Link></p>
              <p><Link className="disk-link-2 disk-link" to={item.link}>{item.name}</Link></p>
            </li>
          ))}
        </ul>
      </div>
      <a className="disk-next r-btn">&nbsp;</a>
    </div>
  </div>
)

export default NewDisk
