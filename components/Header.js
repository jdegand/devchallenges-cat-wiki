import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header>
            <Link prefetch={false} href="/">
                <div className="pointer">
                    <Image src="/CatwikiLogo.svg" alt="Cat Wiki" width="128" height="43" />
                </div>
            </Link>
            <Link prefetch={false} href="/breeds">
                See All Breeds
            </Link>
        </header>
    )
}

export default Header