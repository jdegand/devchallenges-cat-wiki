import Image from "next/image"
import Link from "next/link"

function Header() {
    return (
        <header>
            <Link href="/">
                <div className="pointer">
                    <Image src="/CatwikiLogo.svg" alt="" width="128" height="43" />
                </div>
            </Link>
            <Link href="/breeds">
                See All Breeds
            </Link>
        </header>
    )
}

export default Header