import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

export default function SongList(props) {
  return (
    <div>
      <ul className="songlist">
        {props.songList.map(item => (
          <li className="song-item">
            <div className="item">
              <img alt="fengmian" src={item.imgUrl} />
              <Link className="item-a" to={item.link} />
              <div className="bottom">
                <Link className="icn-play" to={item.link} />
                <span className="icn-headset" />
                <span>{item.playNum}</span>
              </div>
            </div>
            <p className="dec"><Link className="dec-a" to={item.link}>{item.title}</Link></p>
          </li>
        ))}
      </ul>
    </div>
  )
}
