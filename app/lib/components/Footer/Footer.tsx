import { Icon } from '@iconify-icon/react';
import ContactForm from '../ContactForm/ContactForm';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ContactForm />

            <a href="https://github.com/Venyl">
                <Icon icon="tabler:brand-github" width={24} height={24} />
            </a>
        </footer>
    );
}
