import styles from './benefits.module.css';

export const metadata = {
    title: 'Benefits(?) of Cat Ownership'
}

export default function Benefits() {
    return (
        <main className={styles.main}>
            <h1>Reported Health Benefits of Cats</h1>
            <p>Owning a cat is reported to have many health benefits including:</p>
            <h2>Lower Stress and Anxiety</h2>
            <p>Playing with a cat can make you forget about your troubles.  A cat can provide many laughs, as you can see from all the funny videos online. </p>
            <h2>Prevent allergies</h2>
            <p>Exposing a children to a cat can help strengthen their immune system.</p>
            <h2>Reduce feelings of loneliness</h2>
            <p>Cats can be great companions and give you a sense of purpose.</p>
            <h2>Can you really believe it?</h2>
            <p>A lot of these scientific studies probably have tons of flaws. Selection bias is a big issue in pet ownership studies. Are cat owners already happy and healthy people? Obviously, owning a pet is a significant financial commitment. If you choose to own a pet, you are probably financially secure, and financial means improve health results. Pet ownership satisfaction is obtained through surveys. Obviously, people may feel guilty about admitting it was a mistake to get a pet. I think a lot of these studies are probably run by the pet owners themselves, seeking to validate their choice. The satisfaction of owning a pet cannot also discount the grief that could follow with the pet&apos;s death. Don&apos;t think owning a pet will magically fix your problems. After a while, your happiness will regress to your mean happiness. </p>
        </main>
    )
}