import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header style={{"marginBlockEnd": "50px", "marginInlineStart": "30px"}}>
            <ul style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "0 30px"}}>
                <li>
                    <Link prefetch={false} href="/" className="pointer">
                        <Image src="/CatwikiLogo.svg" alt="Cat Wiki" width="128" height="43" />
                    </Link>
                </li>
                <li>
                    <Link prefetch={false} href="/breeds">
                        See All Breeds
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header