import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const CommentItem = () => (
  <div className="comment-item">
    <div className="head">
      <Link className="avart-link" to="person/123">
        <img className="avart-img" src="http://p1.music.126.net/q7TKBgjuzFNTTCQ0t4WJbg==/5923069139043682.jpg?param=50y50" alt="头像" />
      </Link>
    </div>
    <div className="cntwrap">
      <div className="word-wrap">
        <Link to="person/123">
          EileenMa-
        </Link>
        ：曾经的他，最怕我每次去KTV点这首歌，在一起时，我总以为他从不体会我的感受。后来分手后，我才明白，他其实很怕我去怀疑我和他之间的爱情，
        再后来，我才明白他比我想象中的要在乎我多了…多到我以为在一起只是我太需要他，却不知道我是他的全部。
      </div>
      <div className="btm">
        <div className="time">2015年3月20日</div>
        <button className="none-btn"><i className="zan" />(1748)</button>
        <span className="sep">|</span>
        <button className="none-btn">回复</button>
      </div>
    </div>
  </div>
)
export default CommentItem
