import Link from 'next/link'

import appLogo from '@/assets/images/icon.png'
import Image from 'next/image'
import { Button } from '../ui/button'

export function Desktop() {
  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <Image src={appLogo} alt="" height={48} width={48} />
        <strong>Câmbio fácil</strong>
      </Link>

      <nav className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <a href="#hero">
            Converter agora
          </a>
        </Button>

        <Button asChild variant="ghost" size="sm">
          <a href="#history">
            Acompanhar histórico
          </a>
        </Button>
      </nav>
    </div>
  )
}
