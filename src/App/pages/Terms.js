import React from 'react'
import styled from 'styled-components'

export default function Terms(props) {
  const {
    data: { privacy: data }
  } = props

  return (
    <Container>
      {data.map(section => (
        <div key={Math.random()}>
          <h2>{section.title}</h2>
          {section.texts.map(text => (
            <p key={Math.random()}>{text}</p>
          ))}
        </div>
      ))}
    </Container>
  )
}

const Container = styled.div`
  padding: 4rem;
`
