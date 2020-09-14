import React from 'react'

import Select from 'react-select'

const SelectCustom = props => {
  const {
    defaultValue,
    isDisabled,
    isClearable,
    isRtl,
    name,
    blurInputOnSelect,
    isSearchable,
    options,
    onChange
  } = props
  return (
    <Select
      onChange={onChange}
      className='basic-single'
      classNamePrefix='select'
      defaultValue={defaultValue}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isRtl={isRtl}
      blurInputOnSelect={blurInputOnSelect}
      name={name}
      options={options}
    />
  )
}

export default SelectCustom
