'use client'

import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

import currencies, { Currency } from '@/data/currencies'
import { Result } from '.'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRightLeft, Clock, Globe } from 'lucide-react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'

import { Badge } from '@/components/ui/badge'

export function CurrencyForm({ data, slug }: { data: Result, slug: string }) {
  const searchParams = useSearchParams()
  const defaultConvertedCurreny = searchParams.get('to') as Currency

  const [amountValue, setAmountValue] = useState(1)

  const [convertedCurrency, setConvertedCurrency] = useState<Currency>(defaultConvertedCurreny ?? 'BRL')

  const convertedValue = data.conversion_rates[convertedCurrency] * amountValue

  const router = useRouter()

  const currentCurrency = currencies.find(currency => currency.code === slug)
  const currentConvertedCurrency = currencies.find(currency => currency.code === convertedCurrency)

  const lastChangeDate = new Date(data.time_last_update_utc)

  const hour = lastChangeDate.getHours()
  const minutes = lastChangeDate.getMinutes()

  function handleSelectAmountCurrncy(value: string) {
    router.push(`/${value}?to=${convertedCurrency}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="amount" className="text-base lg:text-lg">Quantia</Label>
          <Input
            id="amount"
            type="number"
            value={amountValue}
            onChange={(event) => setAmountValue(Number(event.target.value))}
            inputMode="numeric"
            className="h-12 text-base"
          />
        </div>

        <div className="flex w-full flex-col lg:flex-row items-center gap-2">
          <Select onValueChange={(value) => handleSelectAmountCurrncy(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={currentCurrency
                ? currentCurrency.flag + ' ' + currentCurrency.name
                : 'Selecione uma moeda'}
              />
            </SelectTrigger>
            <SelectContent>
              {currencies.map(currency => (
                <SelectItem key={currency.code} value={currency.code}>
                  <span>{currency.flag} {currency.name}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="ghost">
            <Link href={`/${convertedCurrency}?to=${slug}`}>
              <ArrowRightLeft />
              <p className="sr-only">Alternar entre as moedas</p>
            </Link>
          </Button>

          <Select onValueChange={(value) => setConvertedCurrency(value as Currency)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={currentConvertedCurrency
                ? currentConvertedCurrency.flag + ' ' + currentConvertedCurrency.name
                : 'Selecione uma moeda'}
              />
            </SelectTrigger>
            <SelectContent>
              {currencies.map(currency => (
                <SelectItem key={currency.code} value={currency.code}>
                  <span>{currency.flag} {currency.name}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>

      <div className="space-y-4 p-6 bg-accent rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex gap-0.5">
            <Badge variant="outline">
              {currentCurrency?.flag}
            </Badge>
            <Badge variant="outline">
              {currentConvertedCurrency?.flag}
            </Badge>
          </div>

          <span>{slug} / {convertedCurrency}</span>
        </div>

        <div className="space-y-2">
          <p>
            <strong className="text-3xl">{convertedValue.toFixed(2)}</strong>{' '}
            <strong className="text-lg font-medium text-muted-foreground">{convertedCurrency}</strong>
          </p>

          <p className="text-sm text-muted-foreground font-medium flex gap-1 uppercase items-center">
            <Globe className="size-4" />
            1 {slug} = <span className="text-emerald-500">{data.conversion_rates[convertedCurrency]}</span> {convertedCurrency}
          </p>

        </div>

      </div>

      <div>
        <p className="text-xs text-muted-foreground flex gap-1 items-center">
          <Clock className="size-4" />
          Última atualização: {String(hour).padStart(2, '0')}:{String(minutes).padStart(2, '0')} UTC
        </p>
      </div>
    </div>
  )
}
