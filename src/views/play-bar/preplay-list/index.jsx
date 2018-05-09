import React from 'react'

const PreplayList = () => (
  <div className="preplay">
    <div className="preplay-hd">
      <h4>播放列表</h4>
      <button>收藏全部</button>
      <button>清除</button>
      <p>我与你</p>
      <span>X</span>
    </div>
    <div className="preplay-bd">
      <img src="//music.163.com/api/img/blur/2537672838499047" alt="背景" />
      <div className="msk" />
      <div className="song-list">
        <ul>
          <li>
            <div>我与你</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
export default PreplayList
