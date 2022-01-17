import { Link } from 'react-router-dom'
import styles from '../css/LinkButton.module.css'

function LinkButton({ to, content }) {
    return (
        <Link className={styles.button} to={to}>
            { content }
        </Link>
    )
}

export default LinkButton;
