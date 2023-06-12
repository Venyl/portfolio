import './reset.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Dawid's portfolio",
    description:
        'A personal front-end developer portfolio of Dawid Gajewski-Glugla',
    authors: [{ name: 'Dawid Gajewski-Glugla' }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
            <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
        </html>
    );
}
