import React, { useContext } from 'react'
import Select from '../common/Select'
import { checkLenguage } from '../../utils/translation'
import styled from 'styled-components'
import { MyContext } from '../../context'

const lenguages = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' }
]

const Lenguage = props => {
  const { dispatch } = useContext(MyContext)

  const setLenguage = (value, action) => {
    dispatch({ type: 'SET_LENGUAGE', payload: value.value })
  }

  function getDefault() {
    const recognicedLenguage = checkLenguage()
    let defultLenguage = ''
    for (let i = 0; i < lenguages.length - 1; i++) {
      if (lenguages[i].value === recognicedLenguage) {
        defultLenguage = lenguages[i]
      }
    }
    return defultLenguage
  }

  return (
    <ContainerLenguage>
      <ContainerSelect {...props}>
        <Select
          onChange={setLenguage}
          defaultValue={getDefault()}
          isSearchable={false}
          isDisabled={false}
          isClearable={false}
          isRtl={false}
          blurInputOnSelect={true}
          name='lenguages'
          options={lenguages}
        />
      </ContainerSelect>
    </ContainerLenguage>
  )
}

const ContainerLenguage = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 1.5rem;
  display: flex;
  width: fit-content;
  align-items: center;
`

const ContainerText = styled.div`
  margin-right: 1rem;
  ${props => (props.shouldChangeStyle ? props.default : props.active)};
`

ContainerText.defaultProps = {
  default: {
    color: 'rgba(255, 255, 255, 0.98)'
  },
  active: {
    color: 'rgb(0, 30, 80)'
  }
}

const ContainerSelect = styled.div`
  min-width: 130px;

  .select__control {
    background-color: transparent;
    border: none;
    box-shadow: 0 0 0 0 transparent;

    &:hover,
    &:focus,
    &:active {
      box-shadow: 0px 6px 0px -5px ${props => (props.shouldChangeStyle ? props.default.color : props.active.color)};
    }
  }

  .select__single-value {
    right: 0;
    ${props => (props.shouldChangeStyle ? props.default : props.active)};
  }

  .select__indicator-separator {
    background-color: transparent;
  }

  .select__indicator {
    ${props => (props.shouldChangeStyle ? props.default : props.active)};
  }
`

ContainerSelect.defaultProps = {
  default: {
    color: 'rgba(255, 255, 255, 0.98)'
  },
  active: {
    color: 'rgb(0, 30, 80)'
  }
}

export default Lenguage
