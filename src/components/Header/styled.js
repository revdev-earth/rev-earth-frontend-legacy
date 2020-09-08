import styled from "styled-components";

export const HeaderMain = styled.header`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
  overflow: hidden;

  & > * {
    pointer-events: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc( 16px + 24px + 12px + 32px );
  transform: translateZ(0px);
  color: rgba(255, 255, 255, 0.98);

  background-color: ${ props => props.basic ? props.backgroundColor : 'transparent' };

  transition: height 0.3s ease-in 0s;
`;

Container.defaultProps = {
  backgroundColor: 'mediumseagreen'
}

// Menu 

export const Menu = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 12px;
  padding-top: 16px;
`;

export const ContainerButton = styled.div`
  display: flex;
  padding-left: calc(100vw / 24);
  overflow: hidden;
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  display: block;
  width: auto;
  height: 24px;
  text-align: left;
  font-size: 0px;
  color: rgba(255, 255, 255, 0.98);
  color: ${props => props.basic ? props.default.color : 'rgb(0, 30, 80)' };

  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  padding: 0px;
  margin: 0px;
  background: none;
  
  &:hover,
  &:focus {
    color: ${props => props.basic ? props.active.color : 'rgb(0, 64, 197)' };
    outline: 0px;
  }
`;

ButtonMenu.defaultProps = {
  default: {
    color: 'rgba(255, 255, 255, 0.98)'
  },
  active: {
    color: 'rgb(76, 199, 244)'
  }
}

export const ContainerIcon = styled.div`
  display: inline-block;
`;

export const ContainerText = styled.div`
  display: inline-block;
  vertical-align: text-bottom;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1px;
  padding-left: 10px;
  max-width: calc(25vw);
  overflow: hidden;
`;

export const TextMenu = styled.div`
  font-family: var(--font-family-text, vw-text, Helvetica, Arial, sans-serif);
  color: inherit;
  word-break: inherit;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.04px;
  margin: -1.5px 0px 1.5px;
`;

// Line

export const BoxLine = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  pointer-events: none;
  position: absolute;
  top: 0px;
  transform: translateY( calc( 16px + 24px + 12px + 0px - 16px + 1px ) );
  transition: transform 0.3s ease-in 0s;
`;

export const GridBoxLine = styled.div`
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  --logo-size: 32px;
  --margin-size: 8px;
  grid-template-columns: auto max-content auto;

  &::before,
  &::after {
    content: "";
    height: 2px;
    background: ${props => props.basic ? props.background : 'rgb(0, 30, 80)' };
  }
`;

GridBoxLine.defaultProps = {
  background: 'rgba(255, 255, 255, 0.98)'
}

export const ContainerLogo = styled.div`
  pointer-events: auto;
  margin: 0 10px;

  svg {
    fill: ${props => props.basic ? props.fill : 'rgb(0, 30, 80)' };
    width: var(--logo-size);
    height: var(--logo-size);
  }

`;

ContainerLogo.defaultProps = {
  fill: 'rgba(255, 255, 255, 0.98)'
}

