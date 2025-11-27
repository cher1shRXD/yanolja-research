import Image from "next/image"
import Link from "next/link"
import NavItem from "../atoms/NavItem"
import Language from "../widgets/Language"

const Header = () => {
  return (
    <header className="w-full h-[97px] border-b border-border px-10 flex items-center justify-between">
      <Link href="/">
        <Image src="/asset/logo.svg" alt="Logo" width={260} height={32} />
      </Link>
      <nav className="flex items-center">
        <NavItem title="Research" href="/report" />
        <NavItem title="Datalab" href="/datalab" />
        <NavItem title="Indexes" href="/brand/attractiveness" />
        <NavItem title="About" href="/intro" />
      </nav>
      <Language />
    </header>
  )
}

export default Header