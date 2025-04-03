import Link from 'next/link'

import appLogo from '@/assets/images/icon.png'
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

export function Mobile() {
  return (
    <div className="w-full lg:hidden flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <Image src={appLogo} alt="" height={48} width={48} />
        <strong>Câmbio fácil</strong>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>

          <Button size="icon" variant="outline">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          <DropdownMenuLabel>Navegação</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href="#hero">
              Converter agora
            </a>
          </DropdownMenuItem>
          {/* <DropdownMenuItem asChild>
            <a href="#history">
              Acompanhar histórico
            </a>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
