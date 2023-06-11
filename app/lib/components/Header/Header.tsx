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
                        <a href="https://www.youtube.com/watch?v=unD4hGA6bjI">
                            Skills
                        </a>
                    </li>
                    <li style={{ pointerEvents: 'none' }}>&nbsp;</li>
                </ul>
            </nav>
        </header>
    );
}
