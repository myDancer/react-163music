import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const SimilarItem = () => (
  <li className="similar">
    <div className="text">
      <div><Link className="tit-link" to="song/123">盛夏的果实</Link></div>
      <div><Link className="nam-link" to="person/123">莫文蔚</Link></div>
    </div>
    <div className="opr">
      <button className="opr-btn icn-play" />
      <button className="opr-btn icn-add" />
    </div>
  </li>
)
export default SimilarItem
