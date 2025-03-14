import { Card, CardContent } from '@/components/ui/card'
import { CurrencyForm } from './currency-form'

export const revalidate = 60 * 60 * 24

export type Result = {
  time_last_update_utc: string;
  conversion_rates:
  {
    [key: string]: number
  }
}

export async function HeroSection({ slug }: { slug: string }) {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/${slug}`)
  const data: Result = await response.json()

  return (
    <section className="py-20" id="hero">
      <div className="w-full max-w-6xl mx-auto px-5 space-y-10">
        <div className="flex items-center flex-col gap-4 text-center">
          <h1 className="text-3xl font-medium lg:text-5xl">Câmbio Fácil</h1>
          <p className="text-muted-foreground max-w-[640px] lg:text-lg">
            Converta moedas online com o Câmbio Fácil!
            Veja taxas de câmbio em tempo real,
            histórico de variação e faça cálculos rápidos.
            Simples, rápido e gratuito!
          </p>
        </div>

        <Card>
          <CardContent className="p-10">
            <CurrencyForm data={data} slug={slug} />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
