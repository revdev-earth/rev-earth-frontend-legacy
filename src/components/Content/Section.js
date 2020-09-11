import React, { memo } from "react";
import styled from "styled-components";
import Animation from '../common/Animation'

const Section = memo((props) => {
  const {
    colsA,
    colsB,
    title = "",
    text = "",
    position = "left",
    animation,
    positionStart,
    img,
  } = props;
  const colums = useCols(colsA, colsB, position);

  return (
    <Animation animation={animation} positionStart={positionStart}>
      <Container position={position} >
        <Grid
          colums={colums}
          position={position}
        >
          <AreaA>
            <ContainerImg position={position}>
              <Img alt={img.alt} src={img.src} />
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
    </Animation>
  );
});

const useCols = (colsA, colsB, position) => {
  let a = "";
  let b = "";

  colsA = Number(colsA);
  colsB = Number(colsB);

  if (colsA > 24 || colsA < 24) colsA = 12;
  if (colsB > 24 || colsB < 24) colsB = 12;

  if (colsA !== 12) {
    a = "a0 ".repeat(colsA);
    b = "b0 ".repeat(24 - colsA);
  }

  if (colsB !== 12) {
    a = "a0 ".repeat(24 - colsB);
    b = "b0 ".repeat(colsB);
  }

  if (colsA === 12 || colsB === 12) {
    a = "a0 ".repeat(12);
    b = "b0 ".repeat(12);
  }

  if (position === "top" || position === "down") {
    a = "a0 ".repeat(24 - 6);
    b = "b0 ".repeat(24 - 6);
  }

  return { a, b, position };
};

const Container = styled.div`
  display: flex;
  margin: 6.7rem 0 0;
  overflow-x: hidden;

  ${({ position }) => position === "center" && "margin-top: 4rem;"}

  &:last-child {
    margin-bottom: 4rem;
  }

  @media (max-width: 560px) {
    margin: 0;

    &:first-child {
      margin-top: 2.2rem;
    }
  }
`;

const Grid = styled.div`
  @media (min-width: 560px) {
    display: grid;
    grid-template-columns: repeat(24, 1fr);

    ${({ colums }) => {
      const { a, b, position } = colums;
      let cols = "";
      switch (position) {
        case "left":
          cols = `grid-template-areas: "${a}${b}"`;
          break;
        case "right":
          cols = `grid-template-areas: "${b}${a}"`;
          break;
        case "top":
          cols = `grid-template-areas: ". . . ${a} . . ." ". . . ${b} . . ."`;
          break;
        case "down":
          cols = `grid-template-areas: ". . . ${b} . . ." ". . . ${a} . . ."`;
          break;
        default:
          cols = `grid-template-areas: "${a}${b}"`;
      }

      return cols;
    }}
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
    margin-left: calc((100vw / 24) * 2);
    margin-right: calc((100vw / 24) * 2);
  }
  @media (min-width: 560px) {
    ${({ position }) => {
      if (position === "left") return `margin-left: calc((100vw / 24) * 1);`;
      if (position === "right") return `margin-right: calc((100vw / 24) * 1);`;
    }}
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
    margin: 1.75rem 0;
  }

  @media (min-width: 560px) {
    margin: 2.5rem 0;
  }

  h2 {
    font-size: 3rem;

    @media (max-width: 560px) {
      margin: 0 0 0.123rem;
    }

    @media (min-width: 560px) {
      margin: 0 0 0.25rem;
    }
  }
`;

export default Section;
