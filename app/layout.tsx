import './reset.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: "Dawid's portfolio",
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
