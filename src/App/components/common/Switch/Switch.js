import React, { useState } from 'react'
import styled from 'styled-components'

export default props => {
  const { onChange, cheked = false } = props
  const [isChecked, setChecked] = useState(cheked)

  const onHandle = element => {
    setChecked(element.target.checked)
    onChange && onChange(element)
  }
  return (
    <Input
      onChange={onHandle}
      type='checkbox'
      name='checkbox'
      checked={isChecked}
    />
  )
}

const Input = styled.input`
  -webkit-appearance: none;
  position: relative;
  width: 50px;
  height: 24px;
  /* background-image: url(https://i.postimg.cc/857jHw2q/Screenshot-2020-04-16-at-1-07-06-PM.png); */
  background: transparent;
  background-size: cover;
  border-radius: 50px;
  outline: none;
  transition: background-image 0.9s;
  box-shadow: 0px 2px 5px 1px gray;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    /* height: 100px;
    width: 100px; */
    height: 20px;
    width: 20px;
    background-color: navy;
    border-radius: 50px;
    transition: all 0.9s;
    background-color: #f7ca33;
  }

  &:checked {
    /* background-image: url(https://i.postimg.cc/Hn0nstVK/Screenshot-2020-04-16-at-1-07-19-PM.png); */
    background: transparent;
    transition: background-image 0.9s;
  }

  &:checked:before {
    transform: translate(130%);
    transition: all 0.9s;
    background-color: #ecf0f3;
  }
`
