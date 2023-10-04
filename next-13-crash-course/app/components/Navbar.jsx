import Link from "next/link"
import Image from "next/image"
import Logo from "../components/dojo-logo.png"

export default function Navbar() {
  return (
    <nav>
        <Image
            src={Logo}
            alt="Dojo Logo"
            placeholder="blur"
            width={70}
            quality={100}
        />
        
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/tickets"}>Tickets</Link>
    </nav>
  )
}
