'use client';

import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import classNames from 'classnames';

export const Sort = ({
	sort,
	setSort,
	className,
	...props
}: SortProps): JSX.Element => {
	return (
		<div className={classNames(className, styles['sort'])} {...props}>
			<div className={styles['sortName']} id="sort">
				Сортировка
			</div>
			<button
				id="rating"
				onClick={() => setSort(SortEnum.Rating)}
				className={classNames({
					[styles['active']]: sort == SortEnum.Rating
				})}
				aria-selected={sort === SortEnum.Rating}
				aria-labelledby="sort rating"
			>
				<SortIcon className={styles['sort-icon']} />
				По рейтингу
			</button>
			<button
				id="price"
				onClick={() => setSort(SortEnum.Price)}
				className={classNames({
					[styles['active']]: sort == SortEnum.Price
				})}
				aria-selected={sort === SortEnum.Price}
				aria-labelledby="sort price"
			>
				<SortIcon className={styles['sort-icon']} />
				По цене
			</button>
		</div>
	);
};
