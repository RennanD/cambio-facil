import { Header } from '@/components/header'
import { HeroSection } from '@/sections/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Câmbio Fácil - Converta Moedas em Tempo Real e Grátis',
  description: 'Converta moedas online com o Câmbio Fácil! Veja taxas de câmbio em tempo real, histórico de variação e faça cálculos rápidos. Simples, rápido e gratuito!',
  keywords: [
    'dolár hoje',
    'euro hoje',
    'conversor de moedas online',
    'taxa de câmbio hoje',
    'conversão de moedas em tempo real',
    'dólar para real hoje',
    'euro para real agora',
    'câmbio comercial e turismo',
    'melhor conversor de moedas',
    'histórico de câmbio',
    'calculadora de câmbio online',
    'comparação de taxas de câmbio',
    'valor do dólar agora',
    'câmbio fácil e rápido',
    'converter dólar em real',
    'como converter moedas online grátis',
    'qual a melhor taxa de câmbio hoje',
    'conversor de moedas com histórico de variação',
    'onde ver cotação do dólar em tempo real',
    'melhor site para converter moedas',
  ],
}

type PageProps = Promise<{ slug: string }>

export default async function Home({ params }: { params: PageProps }) {
  const { slug } = await params

  return (
    <>
      <Header />
      <main>
        <HeroSection slug={slug} />
      </main>
    </>
  )
}
