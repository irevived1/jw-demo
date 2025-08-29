import { mockApiData } from '@/utils/mockApiData.js'
import { ETH, BTC, supportedCurrencies, supportedCurrenciesArray } from '@/utils/constants.js'

export const stripNonDigits = (string) => ( string || '' ).replace(/\D/g, '' )

export const getQueryParam = (param) => {
  if ('URLSearchParams' in window) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
  }
  return ""
}

export const setQueryParam = (key, value) => {
  if ('URLSearchParams' in window) {
    const url = new URL(window.location)
    url.searchParams.set(key, value)
    history.pushState(null, '', url);
  }
}

export const currencyProp = {
        type: String,
        default: supportedCurrencies.USD,
        validator: function (value) {
          return supportedCurrenciesArray.indexOf(value) !== -1
        }
      }

const API_URL = 'https://api.coinbase.com/v2/exchange-rates?currency='
export const fetchExchangeRates = async (currency) => {
  try {
    const resp = await fetch(`${API_URL}${currency}`)
    return resp.json()
  } catch (e) {
    console.error('unexpected error', e)
    // WARNING!
    // this is a fallback and is to prevent network issue or coinbase api issue affecting this demo
    return mockApiData[currency]
  }
}

export const fetchAndTrimExchangeData = async (currency) => {
  // uncomment the next line to see loader
  // await sleep(5000)
  const resp = await fetchExchangeRates(currency)
  return { [BTC]: resp.data.rates[BTC], [ETH]: resp.data.rates[ETH] }
}

export const ratesToCryptoValue = (amount, rates, cryptoCurrencyType) => {
  if (!rates) { return 0 }
  return amount * rates[cryptoCurrencyType]
}

// THIS IS FOR DEVELOPMENT ONLY, FAKE SLOW API CALL
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
