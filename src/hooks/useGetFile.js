import { useContext } from 'react'
import { Context } from '../context'

// Hook
export default function useGetFile(section) {
  const {
    context: { lenguage }
  } = useContext(Context)

  const getFile = () => {
    try {
      return require(`../translations/${lenguage}/${section}.json`)
    } catch (err) {
      return {}
    }
  }

  return getFile()
}
