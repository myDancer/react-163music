import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PlyaListInfo from './play-list-info'
import SongTable from './song-tale'
import Comment from '../song/comment'
import Associate from '../song/associate'
import { fetchPlayList, clearPlayList } from '../../redux/playlist.redux'
import './style.styl'


@connect( // 将store和组件联系在一起
  state => ({ // mapStateToProps
    playlistObj: state.playListReducer,
  }),
  { // mapDispatchToProps
    fetchPlayList, clearPlayList,
  },
)
class PlyaList extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentWillMount() {
    this.props.fetchPlayList(this.props.match.params.id)
  }
  componentWillUnmount() {
    this.props.clearPlayList()
  }
  render() {
    const { playlist } = this.props.playlistObj
    return (
      <div className="song-bg">
        <div className="song-warp">
          <div className="song-info">
            <PlyaListInfo playlist={playlist} />
            <SongTable playlist={playlist} />
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
