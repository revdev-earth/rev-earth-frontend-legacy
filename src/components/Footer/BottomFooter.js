import React from 'react'
import styled from 'styled-components'

const BottomFooter = props => {
  const { copy, links } = props
  return (
    <Container>
      <BlockLeft>{copy}</BlockLeft>
      <BlockRight>
        {links.map((link, i) => (
          <BlockChild key={i} link={link} />
        ))}
      </BlockRight>
    </Container>
  )
}

const Container = styled.div`
  @media (min-width: 560px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
  }
`

const BlockLeft = styled.div`
  @media (max-width: 559px) {
    margin-bottom: 2.5rem;
  }
  @media (min-width: 560px) {
    order: 1;
    padding-left: 3rem;
    white-space: nowrap;
  }
`

const BlockRight = styled.div`
  @media (min-width: 560px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const BlockChild = ({ link }) => {
  return (
    <Item>
      <Link href={link.href}>{link.name}</Link>
    </Item>
  )
}

const Item = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: ${({ theme }) => theme?.colors?.black};
  word-break: inherit;
  font-weight: normal;
  font-size: 1em;
  line-height: 2em;
  letter-spacing: 0.04em;
  margin: 0 0 0.11rem;

  @media (min-width: 560px) {
    &:not(:last-child)::after {
      content: '|';
      margin: 0 1rem;
    }
  }
`

const Link = styled.a`
  position: relative;
  padding: 0.4rem 0;
  color: ${({ theme }) => theme?.colors?.link.default};
  text-decoration: none;

  &:hover,
  &:active {
    color: ${({ theme }) => theme?.colors?.link.hover};
  }
`

export default BottomFooter
