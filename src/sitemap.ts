import { MetadataRoute } from 'next'
import CURRENCIES from './data/currencies'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currencies = CURRENCIES.map(currency => ({
    url: `https://cambio-facil.vercel.app/${currency.code}`,
    lastModified: new Date(),
  }))

  return currencies
}
