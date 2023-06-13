import { Icon } from '@iconify-icon/react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    async function sendMail(formData: FormData) {
        'use server';

        const { default: mail } = await import('@sendgrid/mail');
        mail.setApiKey(process.env.SENDGRID_API_KEY!);

        const sender = formData.get('sender');
        const email = formData.get('email');
        const message = formData.get('message');

        const mailContent = `
            From: ${sender}\r\n
            E-mail: ${email}\r\n
            Message: ${message}
        `;

        const mailData = {
            to: 'dawid.gg13@gmail.com',
            from: 'zexe2121@gmail.com',
            subject: `DEV: ${sender}`,
            text: mailContent,
            html: mailContent.replace(/\r\n/g, '<br />'),
        };

        await mail.send(mailData);
    }

    return (
        <form className={styles.form} action={sendMail} id="contact">
            <h2 className="section-title gradient">Get in touch</h2>
            <div>
                <label htmlFor="sender">Sender</label>
                <input type="text" name="sender" id="sender" required />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={5} required />
            </div>

            <button className="cta-btn" type="submit">
                <Icon icon="tabler:send" width="20" height="20" />
                Send
            </button>
        </form>
    );
}
