import Image from "next/image"
import Link from "next/link"

function Header(){
    return (
        <header>
            <Link href="/">
            <div className="pointer">
                <Image src="/CatwikiLogo.svg" alt="" width="128px" height="43px" />
            </div>
            </Link>
        </header>
    )
}

export default Header