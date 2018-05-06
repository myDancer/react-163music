import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PlyaListInfo from './play-list-info'
import SongTable from './song-tale'
import Comment from '../song/comment'
import Associate from '../song/associate'
import { fetchPlayList } from '../../redux/playlist.redux'
import './style.styl'


@connect( // 将store和组件联系在一起
  state => ({ // mapStateToProps
    playlistObj: state.playListReducer,
  }),
  { // mapDispatchToProps
    fetchPlayList,
  },
)
class PlyaList extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params.id)
  }
  // componentDidMount() {
  //   console.log()
  // }
  render() {
    return (
      <div className="song-bg">
        <div className="song-warp">
          <div className="song-info">
            <PlyaListInfo />
            <SongTable />
            <Comment />
          </div>
        </div>
        <div className="right-warp">
          <Associate />
        </div>
      </div>
    )
  }
}
export default withRouter(PlyaList)
