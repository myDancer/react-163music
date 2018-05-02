import React from 'react'
import AssociateItem from './associateItem'
import SimilarItem from './similarItem'
import './style.styl'

const Associate = () => (
  <div className="associate">
    <h3 className="hd3">包含这首歌的歌单</h3>
    <ul className="rctlist">
      <AssociateItem />
      <AssociateItem />
      <AssociateItem />
    </ul>
    <h3 className="hd3">相似歌曲</h3>
    <ul className="rctlist">
      <SimilarItem />
      <SimilarItem />
      <SimilarItem />
      <SimilarItem />
    </ul>
  </div>
)
export default Associate
