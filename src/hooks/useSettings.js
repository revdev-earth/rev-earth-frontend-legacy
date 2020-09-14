import { checkLenguage } from '../utils/translation'

// Hook
export default function useSettings() {
	let settings = {}
	settings.lenguage = checkLenguage()

	return settings
}
