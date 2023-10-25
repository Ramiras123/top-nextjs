'use client';

import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { MenuProps } from './Menu.props';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductIcon from './icons/product.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import cn from 'classnames';
import styles from './Menu.module.css';

export default function Menu({
	menu,
	className,
	firstCategory,
	...props
}: MenuProps) {
	const firstLevelMenu: FirstLevelMenuItem[] = [
		{
			route: 'courses',
			name: 'Курсы',
			icon: <CoursesIcon />,
			id: TopLevelCategory.Curses
		},
		{
			route: 'services',
			name: 'Сервисы',
			icon: <ServicesIcon />,
			id: TopLevelCategory.Services
		},
		{
			route: 'books',
			name: 'Книги',
			icon: <BooksIcon />,
			id: TopLevelCategory.Books
		},
		{
			route: 'products',
			name: 'Товары',
			icon: <ProductIcon />,
			id: TopLevelCategory.Products
		}
	];

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<a href={`/${menu.route}`}>
							<div
								className={cn(styles['first_level'], {
									[styles['first_level__active']]: menu.id === firstCategory
								})}
							>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</a>
						{menu.id === firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles['second_block']}>
				{menu.map((item) => (
					<div key={item._id.secondCategory}>
						<div className={styles['second_level']}>
							{item._id.secondCategory}
						</div>
						<div
							className={cn(styles['second_level_block'], {
								[styles['second_level_block__opened']]: item.isOpened
							})}
						></div>
						{buildThirdLevel(item.pages, menuItem.route)}
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<div key={p.alias}>
				<a
					href={`/products/${p.alias}`}
					className={cn(styles['third_level'], {
						[styles['third_level_active']]: false
					})}
				>
					{p.category}
				</a>
			</div>
		));
	};

	return (
		<div className={cn(className, styles['menu'])} {...props}>
			{buildFirstLevel()}
		</div>
	);
}
