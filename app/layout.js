import Footer from "../components/Footer"
import Header from "../components/Header"
import './global.css';

export const metadata = {
    title: 'Cat Wiki',
    description: 'Devchallenges Legacy Full Stack Cat Wiki solution',
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">  
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}