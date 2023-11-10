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
import { KeyboardEvent, useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';
import { motion } from 'framer-motion';

export default function Menu({
	menuItem,
	className,
	firstCategory,
	...props
}: MenuProps) {
	const pathName = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(menuItem);

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				stagerChildren: 0.1
			}
		},
		hidden: {
			marginBottom: 0
		}
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'auto'
		},
		hidden: {
			opacity: 0,
			height: 0
		}
	};

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

	const openSecondLevelKey = (key: KeyboardEvent, category: string) => {
		if (key.code === 'Enter' || key.code === 'Space') {
			key.preventDefault();
			openSecondLevel(category);
		}
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
								tabIndex={0}
								onKeyDown={(key: KeyboardEvent) =>
									openSecondLevelKey(key, item._id.secondCategory)
								}
								className={styles['second_level']}
								onClick={() => openSecondLevel(item._id.secondCategory)}
							>
								{item._id.secondCategory}
							</div>
							<motion.div
								layout
								variants={variants}
								initial={item.isOpened ? 'visible' : 'hidden'}
								animate={item.isOpened ? 'visible' : 'hidden'}
								className={cn(styles['second_level_block'])}
							>
								{buildThirdLevel(
									item.pages,
									menuItem.route,
									item.isOpened ?? false
								)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (
		pages: PageItem[],
		route: string,
		isOpened: boolean
	) => {
		return pages.map((p) => (
			<motion.div key={p.alias} variants={variantsChildren}>
				<Link
					tabIndex={isOpened ? 0 : -1}
					href={`/${route}/${p.alias}`}
					className={cn(styles['third_level'], {
						[styles['third_level_active']]: `/${route}/${p.alias}` === pathName
					})}
				>
					{p.category}
				</Link>
			</motion.div>
		));
	};

	return (
		<nav role="navigation" className={cn(className, styles['menu'])} {...props}>
			{buildFirstLevel()}
		</nav>
	);
}
