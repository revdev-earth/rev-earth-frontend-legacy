// check if we have the idiom or return 'en'
export function checkoutLenguage() {
  const language = navigator.language.split(/[-_]/)[0] // language without region code
  if (language === 'es' || language === 'en' || language === 'de') {
    return language
  } else {
    return 'en'
  }
}

export function macthMediaTheme() {
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  } catch (e) {
    return false
  }
}
