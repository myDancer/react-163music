import React from 'react'
import { Route, Switch } from 'react-router-dom'
// 按路由拆分代码
import Loadable from 'react-loadable'
import Loading from './component/loading/'

const createLoadableComp = path => Loadable({
  loader: () => import(`./views/${path}/`),
  loading: Loading,
})
// 此处有两种对象，一种是Link以及对应Route都要使用的信息对象，例如toplist
// 一种是Route使用的信息对象，例如artistinfo
export const routeInfo = [
  {
    title: null,
    items: [
      {
        index: 1,
        path: '/discover',
        text: '发现音乐',
        title: '发现音乐',
        component: createLoadableComp('discover'),
      },
      {
        index: 2,
        path: '/song/:id',
        text: '我的音乐',
        title: '我的音乐',
        component: createLoadableComp('song'),
      },
      // {
      //   index: 3,
      //   path: '/friend',
      //   text: '朋友',
      //   title: '朋友',
      //   component: createLoadableComp('friend'),
      // },
      // {
      //   index: 4,
      //   path: '/shop',
      //   text: '商场',
      //   title: '商场',
      //   component: createLoadableComp('shop'),
      // },
      // {
      //   index: 5,
      //   path: '/musicpepole',
      //   text: '音乐人',
      //   title: '音乐人',
      //   component: createLoadableComp('musicpepole'),
      // },
      // {
      //   index: 6,
      //   path: '/download',
      //   text: '下载客户端',
      //   title: '下载客户端',
      //   component: createLoadableComp('download'),
      // },
      // {
      //   index: 7,
      //   path: '/discover/',
      //   component: createLoadableComp('recommend'),
      // },
      // {
      //   index: 8,
      //   path: '/discover/toplist',
      //   component: createLoadableComp('toplist'),
      // },
      // {
      //   index: 9,
      //   path: '/discover/playlist',
      //   component: createLoadableComp('playlist'),
      // },
      // {
      //   index: 10,
      //   path: '/discover/djradio',
      //   component: createLoadableComp('djradio'),
      // },
      // {
      //   index: 11,
      //   path: '/discover/artist',
      //   component: createLoadableComp('artist'),
      // },
      // {
      //   index: 12,
      //   path: '/discover/album',
      //   component: createLoadableComp('album'),
      // },
    ],
  },
  // 这一部分作为收藏歌单的标题
  {
    title: '收藏的歌单',
    items: [],
  },
]

export const Routes = () => {
  let RouteContainer = []
  routeInfo.forEach((route) => {
    const { items } = route
    const block = items.map(v => (
      <Route key={v.path} path={v.path} component={v.component} />
    ))
    RouteContainer = [...RouteContainer, ...block]
  })
  return <Switch>{RouteContainer}</Switch>
}
