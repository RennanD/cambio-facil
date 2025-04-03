import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CurrencyForm } from './currency-form'
import { Badge } from '@/components/ui/badge'
import { Clock, Sparkle } from 'lucide-react'

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
      <div className="w-full max-w-6xl mx-auto px-5 flex flex-col-reverse gap-10 lg:flex-row">
        <Card className="flex-1">
          <CardHeader className="flex items-center justify-between border-b border-gray-100">
            <h2 className="text-2xl font-medium flex items-center gap-2">
              <Sparkle className="size-5" />
              Câmbio Fácil
            </h2>

            <Badge variant="outline">
              <Clock />
              Taxas ao vivo
            </Badge>
          </CardHeader>
          <CardContent>
            <CurrencyForm data={data} slug={slug} />
          </CardContent>
        </Card>

        <div className="flex items-center flex-col gap-4 flex-1 text-center lg:text-start">
          <h1 className="text-3xl font-medium lg:text-6xl">
            Conversão de moeda rápida e confiável
          </h1>
          <p className="text-muted-foreground max-w-[640px] lg:text-lg">
            Converta moedas online com o Câmbio Fácil!
            Veja taxas de câmbio em tempo real,
            histórico de variação e faça cálculos rápidos.
            Simples, rápido e gratuito!
          </p>
        </div>

      </div>
    </section>
  )
}
