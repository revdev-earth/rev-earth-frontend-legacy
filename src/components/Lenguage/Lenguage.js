import React, { useContext } from 'react'
import Select from '../common/Select'
import styled from 'styled-components'
import { MyContext } from '../../context'

const lenguages = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' }
]

const Lenguage = props => {
  const {
    context: { lenguage: lenguageContext },
    dispatch
  } = useContext(MyContext)

  const setLenguage = option => {
    dispatch({ type: 'SET_LENGUAGE', payload: option.value })
  }

  function getDefault() {
    let defultLenguage = ''
    for (let i = 0; i < lenguages.length; i++) {
      if (lenguages[i].value === lenguageContext) {
        defultLenguage = lenguages[i]
        break
      }
    }
    return defultLenguage
  }

  return (
    <ContainerLenguage>
      <ContainerSelect>
        <Select
          onChange={setLenguage}
          defaultValue={getDefault()}
          name='lenguages'
          options={lenguages}
          {...props}
        />
      </ContainerSelect>
    </ContainerLenguage>
  )
}

const ContainerLenguage = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 1.5rem;
  display: flex;
  width: fit-content;
  align-items: center;
`

const ContainerSelect = styled.div``

export default Lenguage
