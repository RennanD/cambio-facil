'use client'

import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

import currencies, { Currency } from '@/data/currencies'
import { Result } from '.'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AlertCircle, ArrowRightLeft } from 'lucide-react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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
      <div className="flex flex-col gap-6 lg:flex-row items-center w-full">
        <div className="w-full space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="amount" className="text-base lg:text-lg">Quantia</Label>
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
            <Label htmlFor="converted" className="text-base lg:text-lg">Converter para</Label>
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

      <div className="flex items-center gap-2">
        <strong className="text-muted-foreground font-medium">
          {currentCurrency?.symbol}1 {slug} = {currentConvertedCurrency?.symbol}{' '}
          <span className="text-emerald-600">{String(data.conversion_rates[convertedCurrency]).replace('.', ',')}</span>{' '}
          {convertedCurrency}
        </strong>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircle className="size-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Última atualização: {String(hour).padStart(2, '0')}:{String(minutes).padStart(2, '0')} UTC</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
