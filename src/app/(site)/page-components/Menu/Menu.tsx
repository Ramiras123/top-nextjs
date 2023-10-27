'use client';

import {
	FirstLevelMenuItem,
	MenuItem,
	PageItem
} from '@/interfaces/menu.interface';
import { MenuProps } from './Menu.props';
import cn from 'classnames';
import styles from './Menu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';

export default function Menu({
	menuItem,
	className,
	firstCategory,
	...props
}: MenuProps) {
	const pathName = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(menuItem);

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondCategory) {
						m.isOpened = !m.isOpened;
					}
					return m;
				})
			);
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<Link href={`/${menu.route}`}>
							<div
								className={cn(styles['first_level'], {
									[styles['first_level__active']]: menu.id === firstCategory
								})}
							>
								{menu.icon}
								<span>{menu.name}</span>
							</div>
						</Link>
						{menu.id === firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles['second_block']}>
				{menu.map((item) => {
					if (item.pages.map((p) => p.alias).includes(pathName.split('/')[2])) {
						item.isOpened = true;
					}
					return (
						<div key={item._id.secondCategory}>
							<div
								className={styles['second_level']}
								onClick={() => openSecondLevel(item._id.secondCategory)}
							>
								{item._id.secondCategory}
							</div>
							<div
								className={cn(styles['second_level_block'], {
									[styles['second_level_block__opened']]: item.isOpened
								})}
							>
								{buildThirdLevel(item.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<div key={p.alias}>
				<Link
					href={`/${route}/${p.alias}`}
					className={cn(styles['third_level'], {
						[styles['third_level_active']]: `/${route}/${p.alias}` === pathName
					})}
				>
					{p.category}
				</Link>
			</div>
		));
	};

	return (
		<div className={cn(className, styles['menu'])} {...props}>
			{buildFirstLevel()}
		</div>
	);
}