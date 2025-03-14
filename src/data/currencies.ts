export type Currency =
  | 'USD' | 'EUR' | 'BRL' | 'GBP' | 'JPY' | 'CAD' | 'AUD' | 'CHF'
  | 'CNY' | 'INR' | 'RUB' | 'MXN' | 'ARS' | 'CLP' | 'COP' | 'ZAR'
  | 'KRW' | 'TRY' | 'SGD' | 'HKD' | 'THB' | 'MYR' | 'IDR' | 'PHP'
  | 'EGP' | 'SAR' | 'AED' | 'PLN' | 'SEK' | 'NOK' | 'DKK' | 'HUF'
  | 'CZK' | 'ILS' | 'NZD' | 'VND' | 'PKR' | 'BDT' | 'NGN' | 'GHS'
  | 'KZT' | 'UAH'

export default [
  { code: 'USD', name: 'Dólar Americano', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'BRL', name: 'Real Brasileiro', symbol: 'R$', flag: '🇧🇷' },
  { code: 'GBP', name: 'Libra Esterlina', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Iene Japonês', symbol: '¥', flag: '🇯🇵' },
  { code: 'CAD', name: 'Dólar Canadense', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Dólar Australiano', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CHF', name: 'Franco Suíço', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'CNY', name: 'Yuan Chinês', symbol: '¥', flag: '🇨🇳' },
  { code: 'INR', name: 'Rúpia Indiana', symbol: '₹', flag: '🇮🇳' },
  { code: 'RUB', name: 'Rublo Russo', symbol: '₽', flag: '🇷🇺' },
  { code: 'MXN', name: 'Peso Mexicano', symbol: '$', flag: '🇲🇽' },
  { code: 'ARS', name: 'Peso Argentino', symbol: '$', flag: '🇦🇷' },
  { code: 'CLP', name: 'Peso Chileno', symbol: '$', flag: '🇨🇱' },
  { code: 'COP', name: 'Peso Colombiano', symbol: '$', flag: '🇨🇴' },
  { code: 'ZAR', name: 'Rand Sul-Africano', symbol: 'R', flag: '🇿🇦' },
  { code: 'KRW', name: 'Won Sul-Coreano', symbol: '₩', flag: '🇰🇷' },
  { code: 'TRY', name: 'Lira Turca', symbol: '₺', flag: '🇹🇷' },
  { code: 'SGD', name: 'Dólar de Singapura', symbol: 'S$', flag: '🇸🇬' },
  { code: 'HKD', name: 'Dólar de Hong Kong', symbol: 'HK$', flag: '🇭🇰' },
  { code: 'THB', name: 'Baht Tailandês', symbol: '฿', flag: '🇹🇭' },
  { code: 'MYR', name: 'Ringgit Malaio', symbol: 'RM', flag: '🇲🇾' },
  { code: 'IDR', name: 'Rupia Indonésia', symbol: 'Rp', flag: '🇮🇩' },
  { code: 'PHP', name: 'Peso Filipino', symbol: '₱', flag: '🇵🇭' },
  { code: 'EGP', name: 'Libra Egípcia', symbol: 'E£', flag: '🇪🇬' },
  { code: 'SAR', name: 'Rial Saudita', symbol: '﷼', flag: '🇸🇦' },
  { code: 'AED', name: 'Dirham dos Emirados', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'PLN', name: 'Zloty Polonês', symbol: 'zł', flag: '🇵🇱' },
  { code: 'SEK', name: 'Coroa Sueca', symbol: 'kr', flag: '🇸🇪' },
  { code: 'NOK', name: 'Coroa Norueguesa', symbol: 'kr', flag: '🇳🇴' },
  { code: 'DKK', name: 'Coroa Dinamarquesa', symbol: 'kr', flag: '🇩🇰' },
  { code: 'HUF', name: 'Forint Húngaro', symbol: 'Ft', flag: '🇭🇺' },
  { code: 'CZK', name: 'Coroa Tcheca', symbol: 'Kč', flag: '🇨🇿' },
  { code: 'ILS', name: 'Novo Shekel Israelense', symbol: '₪', flag: '🇮🇱' },
  { code: 'NZD', name: 'Dólar Neozelandês', symbol: 'NZ$', flag: '🇳🇿' },
  { code: 'VND', name: 'Dong Vietnamita', symbol: '₫', flag: '🇻🇳' },
  { code: 'PKR', name: 'Rupia Paquistanesa', symbol: '₨', flag: '🇵🇰' },
  { code: 'BDT', name: 'Taka de Bangladesh', symbol: '৳', flag: '🇧🇩' },
  { code: 'NGN', name: 'Naira Nigeriano', symbol: '₦', flag: '🇳🇬' },
  { code: 'GHS', name: 'Cedi Ganês', symbol: '₵', flag: '🇬🇭' },
  { code: 'KZT', name: 'Tenge Cazaque', symbol: '₸', flag: '🇰🇿' },
  { code: 'UAH', name: 'Hryvnia Ucraniana', symbol: '₴', flag: '🇺🇦' },
]
