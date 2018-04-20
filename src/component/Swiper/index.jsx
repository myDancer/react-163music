import React from 'react'
import ReactSwipe from 'react-swipe'

class Swiper extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.refCb = this.refCb.bind(this)
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  next() {
    this.reactSwipe.next()
  }
  prev() {
    this.reactSwipe.prev()
  }
  refCb(instance) {
    this.reactSwipe = instance
  }
  render() {
    const swipeOptions = {
      startSlide: 0,
      disableScroll: false,
      auto: 4000,
      speed: 1500,
      continuous: true,
    }
    return (
      <ReactSwipe swipeOptions={swipeOptions} ref={this.refCb}>
        {this.props.images.map(img => (<div key={img}><img src={img} alt="图片" /></div>))}
      </ReactSwipe>
    )
  }
}

export default Swiper
