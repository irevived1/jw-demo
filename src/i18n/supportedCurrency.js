import { USD, EUR } from '@/utils/constants.js'

export const numberFormats = {
  [USD]: {
    currency: {
      style: 'currency', currency: 'USD', notation: 'standard'
    },
  },
  [EUR]: {
    currency: {
      style: 'currency',
      currency: 'EUR',
    },
  },
}
