import {} from 'react'

export default function useGetData(lenguage = 'es') {
  let data = {}
  const files = ['home', 'cookies', 'footer', 'home', 'ideas', 'privacy', 'terms']

  files.forEach((section, i) => {
    try {
      data[section] = require(`../translations/${lenguage}/${section}.json`)
    } catch (err) {
      console.warn(':: err ==> ', err)
      data[section] = {}
    }
  })

  return data
}
