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
			<button
				onClick={() => setSort(SortEnum.Rating)}
				className={classNames({
					[styles['active']]: sort == SortEnum.Rating
				})}
			>
				<SortIcon className={styles['sort-icon']} />
				По рейтингу
			</button>
			<button
				onClick={() => setSort(SortEnum.Price)}
				className={classNames({
					[styles['active']]: sort == SortEnum.Price
				})}
			>
				<SortIcon className={styles['sort-icon']} />
				По цене
			</button>
		</div>
	);
};
