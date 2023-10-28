import { Advantages, HhData, Htag, Tag } from '@/components';
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
			{firstCategory === TopLevelCategory.Curses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages && page.advantages.length > 1 && (
				<>
					<Htag tag="h2">Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && (
				<div
					className={styles['seo']}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map((t) => (
				<Tag key={t} color="primary">
					{t}
				</Tag>
			))}
		</div>
	);
};
