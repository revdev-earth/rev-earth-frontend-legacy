import React from 'react';
import styled from 'styled-components'

/*  Modo de uso
  <MenuHeader shouldChangeStyle={ shouldChangeStyle === bool } />
*/


const MenuHeader = ({ shouldChangeStyle }) => {
  return (
    <Menu>
      <ContainerButton>
        <ButtonMenu aria-hidden="true" shouldChangeStyle={shouldChangeStyle}>
          <ContainerIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              role="img"
            >
              <path d="M0 4h24v2H0zM0 11h14v2H0zM0 18h20v2H0z"></path>
            </svg>
          </ContainerIcon>
          <ContainerText>
            <TextMenu className="text-menu">Menú</TextMenu>
          </ContainerText>
        </ButtonMenu>
      </ContainerButton>
    </Menu>
  );
};


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
  ${props => props.shouldChangeStyle ? props.default : props.active };

  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  padding: 0px;
  margin: 0px;
  background: none;
  
  transition: all 2.3s ease-in 0s;
  
  &:hover,
  &:focus {
    ${props => props.shouldChangeStyle ? props.default : props.active };
    outline: 0px;
  }
`;

ButtonMenu.defaultProps = {
  default: {
    color: 'rgba(255, 255, 255, 0.98)'
  },
  active: {
    color: 'rgb(76, 199, 244)',
    color2: 'rgb(0, 30, 80)'
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


export default MenuHeader