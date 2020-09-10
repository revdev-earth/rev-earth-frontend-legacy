import React from "react";
import styled from "styled-components";
import Image1 from "../../static/images/milky.jpg";

const useCols = (colAreaA, colAreaB, position) => {

  let colsA = "";
  let colsB = "";
  let cols = {}

  if (colAreaA !== 12) {
    colsA = "a0 ".repeat(colAreaA);
    colsB = "b0 ".repeat(24 - colAreaA);
  }

  if (colAreaB !== 12) {
    colsA = "a0 ".repeat(24 - colAreaB);
    colsB = "b0 ".repeat(colAreaB);
  }

  if (colAreaB === 12) {
    colsA = "a0 ".repeat(12);
    colsB = "b0 ".repeat(12);
  }

  if (position === "center") {
    colsA = "a0 ".repeat(24  - 6) 
    colsB = "b0 ".repeat(24  - 6)
  }

  return {colsA, colsB, position };
};

const Section = (props) => {
  const {
    colAreaA = 12,
    colAreaB = 12,
    title = "",
    text = "",
    position = "left",
  } = props;

  const colums = useCols(colAreaA, colAreaB, position);

  return (
    <Container>
      <Grid colums={colums} position={position}>
        <AreaA>
          <ContainerImg>
            <Img alt="Milky" src={Image1} />
          </ContainerImg>
        </AreaA>
        <AreaB>
          <ContainerText>
            {title && <h2>{title}</h2>}
            {text && <p>{text}</p>}
          </ContainerText>
        </AreaB>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 10rem 0 0;

  @media (max-width: 560px) {
    margin: 5rem 0;
  }
`;

const Grid = styled.div`
  @media (min-width: 560px) {
    display: grid;
    grid-template-columns: repeat(24, 1fr);

    ${(props) => {
      let cols = ""
      switch (props.colums.position) {
        case 'left':
          cols = `grid-template-areas: "${props.colums.colsA}${props.colums.colsB}"`
          break
        case 'right':
          cols = `grid-template-areas: "${props.colums.colsB}${props.colums.colsA}"`
          break
        case 'center':
          cols = `grid-template-areas: ". . . ${props.colums.colsB} . . ." ". . . ${props.colums.colsA} . . ."`
          break
        default:
          cols = `grid-template-areas: "${props.colums.colsA}${props.colums.colsB}"`
      }

      return cols } 
    }
  }
`;

const AreaA = styled.div`
  grid-area: a0 / a0 / a0 / a0;
  overflow: visible;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AreaB = styled.div`
  grid-area: b0 / b0 / b0 / b0;
  overflow: visible;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 560px) {
    margin-left: calc((100vw / 24) * 1);
    margin-right: calc((100vw / 24) * 1);
  }
`;

const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  filter: brightness(80%);
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 1;
  pointer-events: all;

  margin-left: calc((100vw / 24) * 2);
  margin-right: calc((100vw / 24) * 2);

  transition: all 0.3s cubic-bezier(0.14, 1.12, 0.67, 0.99) 0.1s;

  @media (max-width: 560px) {
    margin: 2.5rem 0 ;
  }

  @media (min-width: 560px) {
    margin: 2.5rem 0 ;
  }

  h2 {
    font-size: 3rem;

    @media (max-width: 560px) {
      margin: 0 0 2rem;
    }

    @media (min-width: 560px) {
      margin: 0 0 0.25rem;
    }
  }
`;

export default Section;
