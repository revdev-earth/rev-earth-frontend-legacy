import React, { useState } from 'react'
import styled from 'styled-components'

// const options = ["Mangoes", "Apples", "Oranges"];

export default props => {
  const { name, defaultValue = '', options = [], onChange, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenStyle, setIsOpenStyle] = useState(false)
  const [timeOut, settimeOut] = useState(null)
  const [selectedOption, setSelectedOption] = useState(defaultValue || {})

  const togglingPointerOver = () => {
    clearTimeout(timeOut)
    setIsOpenStyle(true)
    setIsOpen(true)
  }

  const togglingPointerLeave = () => close()

  const onHandleChangeOption = option => () => {
    setSelectedOption(option)
    onChange && onChange(option)
  }

  function close() {
    setIsOpenStyle(false)
    settimeOut(setTimeout(() => setIsOpen(false), 320))
  }

  return (
    <DropDownContainer
      name={name}
      onClick={togglingPointerOver}
      onPointerEnter={togglingPointerOver}
      onPointerLeave={togglingPointerLeave}
      {...rest}>
      <DropDownHeader {...rest}>
        <HeaderText>
          {selectedOption.label || defaultValue.label || 'Select'}
        </HeaderText>
        <ContainerIcon {...rest}>
          <svg
            height='20'
            width='20'
            viewBox='0 0 20 20'
            aria-hidden='true'
            focusable='false'>
            <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
          </svg>
        </ContainerIcon>
      </DropDownHeader>
      <DropDownListContainer isOpenStyle={isOpenStyle}>
        {isOpen && (
          <DropDownList {...rest}>
            {options.map(option => {
              const isSelected = option === selectedOption
              return (
                <ListItem
                  onClick={onHandleChangeOption(option)}
                  key={Math.random()}
                  isSelected={isSelected}>
                  {option.label}
                </ListItem>
              )
            })}
          </DropDownList>
        )}
      </DropDownListContainer>
    </DropDownContainer>
  )
}

const DropDownContainer = styled.div`
  &:hover > div:first-of-type,
  &:focus > div:first-of-type,
  &:active > div:first-of-type {
    box-shadow: 0px 6px 0px -5px ${({ affterlimit, theme }) => (affterlimit ? theme?.colors?.primary : theme?.colors?.white)};
  }
  transition: all 0.3s ease;
`

const DropDownHeader = styled.div`
  padding: 0;
  font-size: 1em;
  color: ${({ affterlimit, theme }) =>
    affterlimit ? theme?.colors?.primary : theme?.colors?.white};
  background: transparent;
  display: flex;
  align-items: center;

  box-shadow: 0 0 0 0 transparent;
  transition: all 0.3s ease;
`

const ContainerIcon = styled.div`
  padding: 0;

  svg {
    fill: ${({ affterlimit, theme }) =>
      affterlimit ? theme?.colors?.primary : theme?.colors?.white};
  }
`

const HeaderText = styled.div`
  padding: 0.5rem 1rem;
`

const DropDownListContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;

  ${({ isOpenStyle }) =>
    isOpenStyle &&
    `
    visibility: visible;
    opacity: 1;
  `}
`

const DropDownList = styled.ul`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ affterlimit, theme }) =>
    affterlimit ? theme?.colors?.primary : theme?.colors?.white};
  background: ${({ affterlimit, theme }) =>
    affterlimit ? theme?.colors?.white : 'trasparent'};
  padding: 0.1rem;
  margin-top: 0.6rem;
  box-sizing: border-box;
  border-radius: 3%;
  border: 1px solid
    ${({ affterlimit, theme }) =>
      affterlimit ? theme?.colors?.primary + '50' : 'transparent'};
`

const ListItem = styled.li`
  list-style: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  border-radius: 3%;

  background-color: ${({ isSelected }) =>
    isSelected ? '#3faffa' : 'transparent'};
  transition: all 100ms ease;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#3faffa' : '#3faffa45'};
  }
`
