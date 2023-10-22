import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Footer, Header, Sidebar } from './components';

const inter = Noto_Sans_KR({
	subsets: ['latin'],
	weight: ['300', '400', '600', '500', '700']
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<Header />
				<Sidebar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
