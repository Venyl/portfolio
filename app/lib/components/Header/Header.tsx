import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <a href="#">About me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li style={{ pointerEvents: 'none' }}>&nbsp;</li>
                </ul>
            </nav>
        </header>
    );
}
