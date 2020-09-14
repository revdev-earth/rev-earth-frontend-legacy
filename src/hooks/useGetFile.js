import { useContext } from 'react'
import { MyContext } from '../context'

// Hook
export default function useGetFile(section) {
  const {
    context: { lenguage }
  } = useContext(MyContext)

  const getFile = () => {
    try {
      return require(`../translations/${lenguage}/${section}.json`)
    } catch (err) {
      return {}
    }
  }

  return getFile()
}
