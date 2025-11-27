import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: Props) => {
  return (
    <Link href={href} className="w-40 block text-center font-medium text-black">{title}</Link>
  )
}

export default NavItem