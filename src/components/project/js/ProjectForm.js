import styles from '../css/ProjectForm.module.css'
import Input from '../../form/js/Input';
import SubmitButton from '../../form/js/SubmitButton';

function ProjectForm({ buttonContent }) {
    return (
        <form className={styles.mainForm}>

            <Input type="text" labelContent="Nome do projeto" name="projectName" placeholder="Meu projeto" />

            <SubmitButton content={buttonContent} />

        </form>
    )
}

export default ProjectForm;
