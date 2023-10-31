'use client';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Button, Card, Rating, Tag } from '..';

export const Product = ({ product, ...props }: ProductProps): JSX.Element => {
	return (
		<Card className={styles['product']}>
			<div className={styles['logo']}>
				<img
					src={process.env.NEXT_PUBLIC_DOMIAN + product.image}
					alt={product.title}
				/>
			</div>
			<div className={styles['title']}>{product.title}</div>
			<div className={styles['credit']}>{product.credit}</div>
			<div className={styles['rating']}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={styles['tags']}>
				{product.categories.map((category) => (
					<Tag key={category} color="ghost">
						{category}
					</Tag>
				))}
			</div>
			<div className={styles['price-title']}>цена</div>
			<div className={styles['credit-title']}>кредит</div>
			<div className={styles['rate-title']}>{product.reviewCount} отзывов</div>
			<hr className={styles['hr']} />
			<div className={styles['description']}>{product.description}</div>
			<div className={styles['feature']}>фичи</div>
			<div className={styles['adv-block']}>
				<div className={styles['advantages']}>
					Преимущества
					{product.advantages}
				</div>
				<div className={styles['disadvantages']}>
					Недостатки
					{product.disadvantages}
				</div>
			</div>
			<hr className={styles['hr']} />
			<div className={styles['actions']}>
				<Button appearance="primary">Узнать подробнее</Button>
				<Button appearance="ghost" arrow={'right'}>
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};
