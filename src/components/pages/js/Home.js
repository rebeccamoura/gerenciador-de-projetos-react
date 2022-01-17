import imgNewProject from '../../../img/undraw_new_ideas_jdea.svg'
import styles from '../css/Home.module.css'
import LinkButton from '../../templates/js/LinkButton';

function Home() {
    return (
        <main className={styles.mainHome}>

            <div className={styles.container}>
                <img src={imgNewProject} alt="Novo projeto" />
                <LinkButton to="/newProject" content="Criar novo projeto" />
            </div>

        </main>
    );
}

export default Home;
