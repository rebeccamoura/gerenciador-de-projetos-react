import styles from '../css/NewProject.module.css'
import ProjectForm from '../../project/js/ProjectForm'

function NewProject() {
    return (

        <main className={styles.mainForm}>
            <h1>Cadastro de projeto</h1>

            <ProjectForm buttonContent="Criar projeto" />
        </main>

    )
}

export default NewProject
