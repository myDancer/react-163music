import React from 'react'
import CommentItem from './comment-item'
import './style.styl'

const Comment = () => (
  <div className="comment-box">
    <div className="top-wrap">
      <div className="head-title">
        <h3>评论</h3>
        <span>共3356条评论</span>
      </div>
    </div>
    <div className="content-wrap">
      <div className="iparea">
        <div className="head">
          <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt="头像" />
        </div>
        <div className="r-wrap">
          <div className="textarea">
            <textarea className="area" placeholder="评论" />
          </div>
          <div className="btns">
            <button className="icn btn-emoji" />
            <button className="icn btn-at" />
            <button className="btn-commit">评论</button>
            <span className="maxnum">140</span>
          </div>
        </div>
      </div>
      <div className="g-comments">
        <h3 className="u-hd4">精彩评论</h3>
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  </div>
)
export default Comment
