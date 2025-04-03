import { Desktop } from './desktop'
import { Mobile } from './mobile'

export function Header() {
  return (
    <header className="w-full bg-background/90 backdrop-blur-md sticky top-0">
      <div className="w-full max-w-6xl px-5 mx-auto flex items-center justify-between py-3">
        <Desktop />

        <Mobile />
      </div>
    </header>
  )
}
