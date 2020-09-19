import React from 'react'
import styled from 'styled-components'

/*  Modo de uso
  <MenuHeader affterlimit={ affterlimit === bool } />
*/

const MenuHeader = ({ affterlimit }) => {
  return (
    <Menu>
      <ContainerButton>
        <ButtonMenu aria-hidden='true' affterlimit={affterlimit}>
          <ContainerIcon>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              role='img'>
              <path d='M0 4h24v2H0zM0 11h14v2H0zM0 18h20v2H0z'></path>
            </svg>
          </ContainerIcon>
          <ContainerText>
            <TextMenu className='text-menu'>Menú</TextMenu>
          </ContainerText>
        </ButtonMenu>
      </ContainerButton>
    </Menu>
  )
}

// Menu

export const Menu = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

export const ContainerButton = styled.div`
  display: flex;
  padding-left: calc(100vw / 24);
  overflow: hidden;
`

export const ButtonMenu = styled.button`
  cursor: pointer;
  display: block;
  width: auto;
  height: 24px;
  text-align: left;
  font-size: 0;
  color: ${({ affterlimit, theme }) => (affterlimit ? theme.colors.white : theme.colors.primary)};

  border-width: 0;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  padding: 0;
  margin: 0;
  background: none;

  transition: all 2.3s ease-in 0s;

  &:hover,
  &:focus {
    outline: 0px;
    color: ${({ affterlimit, theme }) => (affterlimit ? theme.colors.white : theme.colors.primary)};
  }
`

export const ContainerIcon = styled.div`
  display: inline-block;
`

export const ContainerText = styled.div`
  display: inline-block;
  vertical-align: text-bottom;
  height: 100%;
  box-sizing: border-box;
  padding-left: 1rem;
  max-width: 25vw;
  overflow: hidden;
`

export const TextMenu = styled.div`
  font-family: var(--font-family-text, vw-text, Helvetica, Arial, sans-serif);
  color: inherit;
  word-break: inherit;
  font-weight: bold;
  font-size: 1em;
  line-height: 1em;
  letter-spacing: 0.04em;
  margin: 0 0 0.5rem;
`

export default MenuHeader
