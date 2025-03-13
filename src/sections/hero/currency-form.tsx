'use client'

import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

import currencies, { Currency } from '@/data/currencies'
import { Result } from '.'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRightLeft } from 'lucide-react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'

export function CurrencyForm({ data, slug }: { data: Result, slug: string }) {
  const searchParams = useSearchParams()
  const defaultConvertedCurreny = searchParams.get('to') as Currency

  const [amountValue, setAmountValue] = useState(1)

  const [convertedCurrency, setConvertedCurrency] = useState<Currency>(defaultConvertedCurreny ?? 'BRL')

  const convertedValue = data.conversion_rates[convertedCurrency] * amountValue

  const router = useRouter()

  const currentCurrency = currencies.find(currency => currency.code === slug)
  const currentConvertedCurrency = currencies.find(currency => currency.code === convertedCurrency)

  function handleSelectAmountCurrncy(value: string) {
    router.push(`/${value}?to=${convertedCurrency}`)
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row items-center">
      <div className="w-full space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="amount">Quantia</Label>
          <Input
            id="amount"
            type="number"
            value={amountValue}
            onChange={(event) => setAmountValue(Number(event.target.value))}
            inputMode="numeric"
          />
        </div>
        <Select onValueChange={(value) => handleSelectAmountCurrncy(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={currentCurrency
              ? currentCurrency.name + ' ' + currentCurrency.flag
              : 'Selecione uma moeda'}
            />
          </SelectTrigger>
          <SelectContent>
            {currencies.map(currency => (
              <SelectItem key={currency.code} value={currency.code}>
                <span>{currency.name} {currency.flag}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button variant="ghost">
          <Link href={`/${convertedCurrency}?to=${slug}`}>
            <ArrowRightLeft />
          </Link>
        </Button>
      </div>
      <div className="w-full space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="converted">Converter para</Label>
          <Input id="converted" value={convertedValue.toFixed(2)} type="number" readOnly />
        </div>
        <Select onValueChange={(value) => setConvertedCurrency(value as Currency)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={currentConvertedCurrency
              ? currentConvertedCurrency.name + ' ' + currentConvertedCurrency.flag
              : 'Selecione uma moeda'}
            />
          </SelectTrigger>
          <SelectContent>
            {currencies.map(currency => (
              <SelectItem key={currency.code} value={currency.code}>
                <span>{currency.name} {currency.flag}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
