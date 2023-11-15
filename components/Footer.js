import Image from "next/legacy/image";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <Image src="/CatwikiLogoWhite.svg" alt="" width="128" height="43" />
            </div>
            <div>
                &#169;<a href="https://github.com/jdegand" target="_blank" rel="noreferrer">jdegand</a> - devchallenges 2022-2023
            </div>
        </footer>
    )
}

export default Footer;