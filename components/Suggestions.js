import styles from '../styles/Suggestions.module.css';

const Suggestions = (props) => {

    return (
        <div className={styles.modal}>
            <ul>
                {props.breeds.filter(breed => breed.toLowerCase().includes(props.searchTerm.toLowerCase())).map(breed => {
                    return (
                        <li key={breed} className={styles.breed} onClick={props.handleClick}>{breed}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Suggestions;