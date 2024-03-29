import Link from 'next/link';
import styles from './breeds.module.css';

export const metadata = {
    title: 'All Cat Breeds'
}

export default function Breeds() {

    const breeds = ["Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Arabian Mau", "Australian Mist", "Balinese", "Bambino", "Bengal", "Birman", "Bombay", "British Longhair", "British Shorthair", "Burmese", "Burmilla", "California Spangled", "Chantilly-Tiffany", "Chartreux", "Chausie", "Cheetoh", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Cyprus", "Devon Rex", "Donskoy", "Dragon Li", "Egyptian Mau", "European Burmese", "Exotic Shorthair", "Havana Brown", "Himalayan", "Japanese Bobtail", "Javanese", "Khao Manee", "Korat", "Kurilian", "LaPerm", "Maine Coon", "Malayan", "Manx", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental", "Persian", "Pixie-bob", "Ragamuffin", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Snowshoe", "Somali", "Sphynx", "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van", "York Chocolate"];

    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>All Cat Breeds</h1>
            <ul className={styles.breedGrid}>
                {breeds.map(breed => {
                    return (
                        <Link prefetch={false} href={`/breeds/breed?searchTerm=${encodeURI(breed)}`} key={breed} passHref={true}>
                            <li className={styles.breed}>{breed}</li>
                        </Link>
                    )
                })}
            </ul>
        </main>
    )
}