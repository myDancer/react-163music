import React from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'
import { fetchSwiperImg } from '../../../redux/swiper.redux'
import Swiper from '../../../component/Swiper'
import DownLoad from '../download'
import './style.styl'

@connect( // 将store和组件联系在一起
  state => ({ // mapStateToProps
    swiperObj: state.swiper,
  }),
  { // mapDispatchToProps
    fetchSwiperImg,
  },
)
class Recommend extends React.Component {
  componentDidMount() {
    const { items } = this.props.swiperObj
    if (!items.length) {
      this.props.fetchSwiperImg()
    }
  }
  onRef = (ref) => {
    this.child = ref
  }
  leftButtonClick = () => {
    if (this.props.swiperObj.items.length) {
      this.child.prev()
    }
  }
  rightButtonClick = () => {
    if (this.props.swiperObj.items.length) {
      this.child.next()
    }
  }
  render() {
    const { items } = this.props.swiperObj
    let swiper
    if (items.length) {
      swiper = <Swiper images={items} onRef={this.onRef} />
    } else {
      swiper = null
    }
    return (
      <div className="swiper">
        <div className="swiper-content">
          <div className="img-wrapper">
            {swiper}
            <DownLoad />
          </div>
          <a className="banner-btn left-btn" onClick={this.leftButtonClick}>&gt;</a>
          <a className="banner-btn right-btn" onClick={this.rightButtonClick}>&lt;</a>
        </div>
      </div>
    )
  }
}
export default Recommend
