'use client';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import {
	Button,
	Card,
	Divider,
	Rating,
	Review,
	ReviewForm,
	Tag
} from '@/components';
import { deсlOfNum, priceRu } from '@/helpers/helpers';
import classNames from 'classnames';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { API } from '@/helpers/api';
import { motion } from 'framer-motion';

export const Product = motion(
	forwardRef(
		(
			{ product, ...props }: ProductProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
			const reviewRef = useRef<HTMLDivElement>(null);

			const variants = {
				visible: { opacity: 1, height: 'auto' },
				hidden: {
					opacity: 0,
					height: 0,
					overflow: 'hidden'
				}
			};

			const scrollToReview = () => {
				setIsReviewOpened(true);
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				reviewRef.current?.focus();
			};

			return (
				<div {...props} ref={ref}>
					<Card className={styles['product']}>
						<div className={styles['logo']}>
							<img
								src={API.process + product.image}
								alt={product.title}
								width={70}
								height={70}
							/>
						</div>
						<div className={styles['title']}>{product.title}</div>
						<div className={styles['price']}>
							<span>
								<span className="visualy-hidden">Цена</span>
								{priceRu(product.price)}
							</span>
							{product.oldPrice && (
								<Tag color="green" className={styles['old-price']}>
									<span className="visualy-hidden">Скидка</span>
									{priceRu(product.price - product.oldPrice)}
								</Tag>
							)}
						</div>

						<div className={styles['credit']}>
							<span>
								<span className="visualy-hidden">Кредит</span>
								{priceRu(product.credit)}/<span>мес</span>
							</span>
						</div>
						<div className={styles['rating']}>
							<span className="visualy-hidden">
								{'Рейтинг' + product.reviewAvg ?? product.initialRating}
							</span>
							<Rating rating={product.reviewAvg ?? product.initialRating} />
						</div>
						<div className={styles['tags']}>
							{product.categories.map((category) => (
								<Tag
									key={category}
									className={styles['category']}
									color="ghost"
								>
									{category}
								</Tag>
							))}
						</div>
						<div className={styles['price-title']} aria-hidden={true}>
							цена
						</div>
						<div className={styles['credit-title']} aria-hidden={true}>
							кредит
						</div>
						<div className={styles['rate-title']}>
							<a href="#ref" onClick={scrollToReview}>
								{product.reviewCount}{' '}
								{deсlOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
							</a>
						</div>
						<Divider className={styles['hr']} />
						<div className={styles['description']}>{product.description}</div>
						<div className={styles['feature']}>
							{product.characteristics.map((characteristic) => (
								<div
									className={styles['characteristic']}
									key={characteristic.name}
								>
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
								aria-expanded={true}
							>
								Читать отзывы
							</Button>
						</div>
					</Card>
					<motion.div
						animate={isReviewOpened ? 'visible' : 'hidden'}
						variants={variants}
						initial="hidden"
					>
						<Card
							color="blue"
							ref={reviewRef}
							className={styles['reviews']}
							tabIndex={isReviewOpened ? 0 : -1}
						>
							{product.reviews.map((review) => (
								<div key={review._id}>
									<Review review={review} />
									<Divider />
								</div>
							))}
							<ReviewForm productId={product._id} isOpened={isReviewOpened} />
						</Card>
					</motion.div>
				</div>
			);
		}
	)
);
