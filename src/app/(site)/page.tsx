import { Button, Htag, Input, Paragraph, Tag, Textarea } from '@/components';
import styles from './styles/page.module.css';
import { Metadata } from 'next';
import { ClientRatingComponent } from '@/ClientComponent';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'все ок'
	};
}

export default async function Home() {
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
				<Paragraph appearance="big">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nobis
					deserunt quia beatae ratione fugit voluptatum excepturi tenetur rem
					dicta. Dolorem sapiente magni voluptates officiis architecto tempora
					quia qui tenetur.
				</Paragraph>
				<Paragraph appearance="medium">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nobis
					deserunt quia beatae ratione fugit voluptatum excepturi tenetur rem
					dicta. Dolorem sapiente magni voluptates officiis architecto tempora
					quia qui tenetur.
				</Paragraph>
				<Paragraph appearance="small">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nobis
					deserunt quia beatae ratione fugit voluptatum excepturi tenetur rem
					dicta. Dolorem sapiente magni voluptates officiis architecto tempora
					quia qui tenetur.
				</Paragraph>
				<Tag appearance="small" color="ghost">
					tag
				</Tag>
				<ClientRatingComponent />
				<Input placeholder="Имя" />
				<Textarea />
			</div>
		</main>
	);
}
