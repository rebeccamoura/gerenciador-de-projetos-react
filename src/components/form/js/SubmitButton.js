import styles from '../css/SubmitButton.module.css'

function SubmitButton({ content }) {
    return (
        <button className={styles.btn}>
            { content }
        </button>
    )
}

export default SubmitButton;