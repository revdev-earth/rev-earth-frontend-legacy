import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopFooter = ({ blocks }) => {
  return (
    <Container>
      {blocks.map((block, index) => (
        <Block key={index} links={block.links} title={block.title} />
      ))}
    </Container>
  )
}

const Block = ({ title, links }) => {
  return (
    <ContainerBlock>
      <Title>{title}</Title>

      <List>
        {links.map((link, index) => (
          <BlockChild key={index} link={link} />
        ))}
      </List>
    </ContainerBlock>
  )
}

const Container = styled.div`
  @media (min-width: 560px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`

const ContainerBlock = styled.div`
  @media (max-width: 559px) {
    margin-bottom: 2.5rem;
  }
`

const Title = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: 0;
  word-break: inherit;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const List = styled.ul`
  padding: 0;
  list-style: none;
`

const BlockChild = ({ link }) => {
  return (
    <Item>
      {link.href.indexOf('http') > -1 ? (
        <a href={link.href} alt={link.name}>
          {link.name}
        </a>
      ) : (
        <Link to={link.href}>{link.name}</Link>
      )}
    </Item>
  )
}

const Item = styled.li`
  font-family: Helvetica, Arial, sans-serif;
  word-break: inherit;
  font-weight: normal;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: 0.04em;
  margin: 0 0px 0.11em;

  a {
    display: block;
    position: relative;
    padding: 0.4rem 0;
    text-decoration: none;
  }
`

export default TopFooter
