'use client';
import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import styles from './page.module.css';
import { Metadata } from 'next';
import { useState } from 'react';

// export async function generateMetadata(): Promise<Metadata> {
// 	return {
// 		title: 'все ок'
// 	};
// }

export default function Home() {
	const [rating, setRating] = useState(0);
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
				<Rating rating={rating} isEditable setRating={setRating} />
			</div>
		</main>
	);
}
