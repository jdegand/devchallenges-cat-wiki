import HomePage from './home-page'

async function getBreeds() {
    const res = await fetch('https://api.thecatapi.com/v1/breeds', {
        method: 'GET',
        headers: {
            "x-api-key": process.env.API_KEY
        }
    })
    const breeds = await res.json()
    return breeds
}

export default async function Page() {
    // Fetch data directly in a Server Component
    const recentBreeds = await getBreeds()
    // Forward fetched data to your Client Component
    return <HomePage json={recentBreeds} />
}