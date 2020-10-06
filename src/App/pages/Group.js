import React from 'react'
import styled from 'styled-components'

export default function Group(props) {
  const {
    data: { group }
  } = props

  return (
    <Container>
      <h1>{group.title}</h1>
      {group.texts.map((text, index) => (
        <p key={Math.random()}>{text}</p>
      ))}
    </Container>
  )
}

const Container = styled.div`
  padding: 4rem;
  color: #999999;
`
