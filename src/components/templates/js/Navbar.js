import { Link } from 'react-router-dom'
import styles from '../css/Navbar.module.css'
import logo from '../../../img/undraw_hologram_fjwp.svg'

function Navbar() {

    return (

        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <h1>Gerenciador de projetos</h1>
                <ul>
                    <li>
                        <Link to="/" className={styles.link}>
                            Página inicial
                        </Link>
                    </li>
                    <li>
                        <Link exact to="/newProject" className={styles.link}>
                            Novo projeto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )

}

export default Navbar;
