import {  HhData, Htag, Tag } from '@/components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const TopPageComponent = ({
	page,
	products,
	firstCategory
}: TopPageComponentProps) => {
	return (
		<div className={styles['wrapper']}>
			<div className={styles['title']}>
				<Htag tag="h1">{page.title}</Htag>
				{products && (
					<Tag color="gray" appearance="medium">
						{products.length}
					</Tag>
				)}
				<span>Сортировка</span>
			</div>
			<div>
				{products &&
					products.map((product) => (
						<div key={product._id}>{product.title}</div>
					))}
			</div>
			<div className={styles['hhTitle']}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				<Tag color="red" appearance="medium">
					hh.ru
				</Tag>
			</div>
			{firstCategory === TopLevelCategory.Curses && <HhData {...page.hh} />}
		</div>
	);
};
