import React from 'react'
import styled from 'styled-components'

export default function Ideas(props) {
  const {
    data: { ideas }
  } = props

  return (
    <Container>
      <h1>{ideas.title}</h1>
      {ideas.texts.map(text => (
        <p>{text}</p>
      ))}
    </Container>
  )
}

const Container = styled.div`
  padding: 4rem;
  color: #999999;
`
