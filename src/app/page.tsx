import { Button, Htag } from '@/components';
import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'все ок'
	};
}

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<Htag tag="h1">Текст</Htag>
				<Button appearance="primary" arrow="right">
					Сохранить
				</Button>
				<Button appearance="ghost" arrow="right">
					Сохранить
				</Button>
			</div>
		</main>
	);
}
