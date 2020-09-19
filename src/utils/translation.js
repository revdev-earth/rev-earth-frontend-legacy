// check if we have the idiom or return 'en'
export function checkLenguage() {
  const language = navigator.language.split(/[-_]/)[0] // language without region code
  if (language === 'es' || language === 'en' || language === 'de') {
    return language
  } else {
    return 'en'
  }
}
