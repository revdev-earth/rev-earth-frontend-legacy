import { useCtx } from '../context'

// Hook
export default function useGetFile(section) {
  const {
    state: { lenguage }
  } = useCtx()

  const getFile = () => {
    try {
      return require(`../translations/${lenguage}/${section}.json`)
    } catch (err) {
      console.warn(':: err ==> ', err)
      return {}
    }
  }

  return getFile()
}
