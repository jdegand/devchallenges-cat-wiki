import styles from '../../styles/Breeds.module.css'
import Link from 'next/link'

export default function Breeds() {

    const breeds = ["Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Arabian Mau", "Australian Mist", "Balinese", "Bambino", "Bengal", "Birman", "Bombay", "British Longhair", "British Shorthair", "Burmese", "Burmilla", "California Spangled", "Chantilly-Tiffany", "Chartreux", "Chausie", "Cheetoh", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Cyprus", "Devon Rex", "Donskoy", "Dragon Li", "Egyptian Mau", "European Burmese", "Exotic Shorthair", "Havana Brown", "Himalayan", "Japanese Bobtail", "Javanese", "Khao Manee", "Korat", "Kurilian", "LaPerm", "Maine Coon", "Malayan", "Manx", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental", "Persian", "Pixie-bob", "Ragamuffin", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Snowshoe", "Somali", "Sphynx", "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van", "York Chocolate"]

    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>All Cat Breeds</h1>
            <ul className={styles.breedGrid}>
                {breeds.map(breed => {
                    return (
                        <Link href={`/breeds/breed?searchTerm=${breed}`} key={breed}>
                            <li className={styles.breed}><button className={styles.breedBtn}>{breed}</button></li>
                        </Link>
                    )
                })}
            </ul>
        </main>
    )
}