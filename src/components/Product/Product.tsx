'use client';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Button, Card, Divider, Rating, Review, Tag } from '@/components';
import { deсlOfNum, priceRu } from '@/helpers/helpers';
import Image from 'next/image';
import classNames from 'classnames';
import { useState } from 'react';

export const Product = ({ product, ...props }: ProductProps): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

	return (
		<>
			<Card className={styles['product']}>
				<div className={styles['logo']}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMIAN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles['title']}>{product.title}</div>
				<div className={styles['price']}>
					{priceRu(product.price)}
					{product.oldPrice && (
						<Tag color="green" className={styles['old-price']}>
							{priceRu(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>

				<div className={styles['credit']}>
					{priceRu(product.credit)}/<span>мес</span>
				</div>
				<div className={styles['rating']}>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={styles['tags']}>
					{product.categories.map((category) => (
						<Tag key={category} className={styles['category']} color="ghost">
							{category}
						</Tag>
					))}
				</div>
				<div className={styles['price-title']}>цена</div>
				<div className={styles['credit-title']}>кредит</div>
				<div className={styles['rate-title']}>
					{product.reviewCount}{' '}
					{deсlOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
				</div>
				<Divider className={styles['hr']} />
				<div className={styles['description']}>{product.description}</div>
				<div className={styles['feature']}>
					{product.characteristics.map((characteristic) => (
						<div className={styles['characteristic']} key={characteristic.name}>
							<span className={styles['characteristic-name']}>
								{characteristic.name}
							</span>
							<span className={styles['characteristic-dots']}></span>
							<span className={styles['characteristic-value']}>
								{characteristic.value}
							</span>
						</div>
					))}
				</div>
				<div className={styles['adv-block']}>
					{product.advantages && (
						<div className={styles['advantages']}>
							<hr className={styles['adv-hr']} />
							<div>
								<div className={styles['adv-title']}>Преимущества</div>
								<div>{product.advantages}</div>
							</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles['disadvantages']}>
							<hr className={styles['disadv-hr']} />
							<div>
								<div className={styles['adv-title']}>Недостатки</div>
								<div>{product.disadvantages}</div>
							</div>
						</div>
					)}
				</div>
				<Divider className={classNames(styles['hr'], styles['hr2'])} />
				<div className={styles['actions']}>
					<Button appearance="primary">Узнать подробнее</Button>
					<Button
						appearance="ghost"
						arrow={isReviewOpened ? 'down' : 'right'}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
					>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<Card
				color="blue"
				className={classNames(styles['review'], {
					[styles['opened']]: isReviewOpened,
					[styles['closed']]: !isReviewOpened
				})}
			>
				{product.reviews.map((review) => (
					<div key={review._id}>
						<Review review={review} />
						<Divider />
					</div>
				))}
			</Card>
		</>
	);
};
