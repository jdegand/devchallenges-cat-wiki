import Image from "next/image";

function Footer(){
    return (
        <footer className="footer">            
            <div>
                <Image src="/CatwikiLogoWhite.svg" alt="" width="128px" height="43px" />
            </div>
            <div>
            &#169; created by <a href="https://github.com/jdegand" target="_blank" rel="noreferrer">jdegand</a> - devchallenges.io 2022
            </div>
        </footer>
    )
}

export default Footer;