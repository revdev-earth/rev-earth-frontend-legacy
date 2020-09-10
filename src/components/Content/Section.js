import React from 'react';
import styled from 'styled-components'
import Image1 from '../../static/images/milky.jpg'


const Section = () => {
  return (
    <Grid>
      <AreaA>
        <ContainerImg>
          <img alt="Milky" src={Image1} />
        </ContainerImg>
      </AreaA>
      <AreaB>
        <h2>Title</h2>
        <p>paragrph, used to show information in two lines</p>
      </AreaB>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-areas: "a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0";
`

const AreaA = styled.div`
  grid-area: a0 / a0 / a0 / a0;
  overflow: visible;
`

const AreaB = styled.div`
  grid-area: b0 / b0 / b0 / b0;
  overflow: visible;
`

const ContainerImg = styled.div`
  overflow: hidden;
  height: 100%;
`

export default Section