'use client';

import { Advantages, HhData, Htag, Product, Sort, Tag } from '@/components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { SortEnum } from '@/components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { useReducedMotion } from 'framer-motion';

export const TopPageComponent = ({
	page,
	products,
	firstCategory
}: TopPageComponentProps) => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating
		}
	);
	const shouldReduceMotion = useReducedMotion();

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
		<div className={styles['wrapper']}>
			<div className={styles['title']}>
				<Htag tag="h1">{page.title}</Htag>
				{sortedProducts && (
					<Tag
						color="gray"
						appearance="medium"
						aria-label={sortedProducts.length + ' элементов'}
					>
						{sortedProducts.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div role="list">
				{sortedProducts &&
					sortedProducts.map((product) => (
						<Product
							role="listitem"
							layout={shouldReduceMotion ? false : true}
							key={product._id}
							product={product}
						/>
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
