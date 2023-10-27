import { Htag, Tag } from '@/components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

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
			{products && products.map(product => (<div key={product._id}>{product.title}</div>))}
		</div>
	);
};
