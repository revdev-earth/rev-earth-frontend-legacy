import React from 'react';
import styled from 'styled-components'
import Image1 from '../../static/images/milky.jpg'


const Intro = ({title, text}) => {
  return (
    <Container>
      <Absolute>
        <ContainerImg>
          <Img alt="Milky" src={Image1} />
        </ContainerImg>
      </Absolute>
      <Absolute>
        <ContainerText>
            {title && <h2>{title}</h2>}
            {text && <p>{text}</p>}
          <Sparador></Sparador>
        </ContainerText>
      </Absolute>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  position: relative;
`

const Absolute = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ContainerImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
`

const Img = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
  display: block;
  width: 100%;
  filter: brightness(80%);
`

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  height: 100vh;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.14, 1.12, 0.67, 0.99) 0.1s, height 0.3s ease-in 0s;
  pointer-events: all;
  color: white;
  margin-left: calc((100vw / 24) * 2);
  margin-right: calc((100vw / 24) * 2);

  h2 {
    font-size: 3rem;
  }

  @media (min-width: 560px) {
    & {
      margin-right: calc((100vw / 24) * 6);
    }
  }
`

const Sparador = styled.div`
  height: 20%;
`

export default Intro