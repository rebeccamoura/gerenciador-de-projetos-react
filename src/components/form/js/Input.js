import styles from '../css/Input.module.css'

function Input({ type, name, placeholder, handleOnChange, value, labelContent }) {
    return (

        <div className={styles.formField}>

            <label htmlFor={name}>
                { labelContent }
            </label>
            <input type={type} placeholder={placeholder} value={value} onChange={handleOnChange} name={name} />

        </div>
        
    )
}

export default Input;
