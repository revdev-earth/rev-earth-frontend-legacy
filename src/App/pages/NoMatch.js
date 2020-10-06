import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

export default function NoMatch(props) {
  let location = useLocation()

  // eslint-disable-next-line no-unused-vars
  const { data } = props

  return (
    <Container>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 50vh;
`
