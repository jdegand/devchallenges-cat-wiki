import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link prefetch={false} href="/">
                <div>
                    <Image src="/CatwikiLogoWhite.svg" alt="" width="128" height="43" />
                </div>
            </Link>
            <div>
                &#169;<a href="https://github.com/jdegand" target="_blank" rel="noreferrer">jdegand</a> - devchallenges 2022-2023
            </div>
        </footer>
    )
}

export default Footer;