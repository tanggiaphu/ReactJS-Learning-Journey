import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={`${styles.card} ${props.cssClasses}`} >
            {props.children}
        </div >
    )
}

export default Card;