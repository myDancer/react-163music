import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const SongCard = (props) => {
  const {
    creator, id, imgUrl, title,
  } = props.playlist
  return (
    <div className="songcard">
      <div className="album-img">
        <Link to={{ pathname: `/playlistinfo/${id}` }}>
          <img src={imgUrl} alt="playlist-cover" />
        </Link>
      </div>
      <Link to={{ pathname: `/playlistinfo/${id}` }}>
        <p className="title">{title}</p>
      </Link>
      <Link to={{ pathname: `/playlistinfo/${id}` }}>
        <p className="creator">by {creator}</p>
      </Link>
    </div>
  )
}

export default SongCard
