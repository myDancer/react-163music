import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '../toolbar'
import SongList from '../songlist'
import Login from '../login'
import SingerList from '../singerlist'
import NewDisk from '../newDisk'
import HotDj from '../hotDJ'
import BillList from '../billlist'
import { fetchRecommend } from '../../../redux/recommend.redux'
import './style.styl'

@connect( // 将store和组件联系在一起
  state => ({ // mapStateToProps
    recommendObj: state.recommendReducer,
  }),
  { // mapDispatchToProps
    fetchRecommend,
  },
)
class DiscoverModule extends React.Component {
  componentDidMount() {
    const { recommend } = this.props.recommendObj
    if (!recommend.recommend.length) {
      this.props.fetchRecommend()
    }
  }
  render() {
    const {
      recommend, diskList, billList, singerList, djList,
    } = this.props.recommendObj.recommend
    const toolbar = {
      title: '热门推荐',
      urlList: [
        { url: '1', name: '华语' },
        { url: '2', name: '流行' },
        { url: '3', name: '摇滚' },
        { url: '4', name: '民谣' },
        { url: '5', name: '电子' },
      ],
    }
    return (
      <div className="discover-module">
        <div className="l-wrap">
          <div className="l-wrap1">
            <Toolbar toolbar={toolbar} />
            <SongList songList={recommend} />
          </div>
          <div className="l-wrap1">
            <Toolbar toolbar={{ title: '新碟上架' }} />
            <NewDisk diskList={diskList} />
          </div>
          <div className="l-wrap1">
            <Toolbar toolbar={{ title: '榜单' }} />
            <BillList billList={billList} />
          </div>
        </div>
        <div className="r-wrap">
          <Login />
          <SingerList singerList={singerList} />
          <HotDj djList={djList} />
        </div>
      </div>
    )
  }
}
export default DiscoverModule
