import React from 'react'
import Content from '../components/Content'

export default function Home(props) {
  const {
    data: { home: data }
  } = props

  return <Content data={data} />
}
