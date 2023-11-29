import React from 'react'
import { Main } from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowID='1' title='UpComing' fetchURL={requests.upcoming}/>
      <Row rowID='2' title='Popular' fetchURL={requests.popular}/>
      <Row rowID='3' title='Trending' fetchURL={requests.trending}/>
      <Row rowID='4' title='Trending' fetchURL={requests.topRated}/>
      <Row rowID='5' title='Horror' fetchURL={requests.horror}/>
    </>
  )
}

export default Home