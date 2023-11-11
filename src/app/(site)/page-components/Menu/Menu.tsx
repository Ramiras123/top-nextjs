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
import { motion, useReducedMotion } from 'framer-motion';

export default function Menu({
	menuItem,
	className,
	firstCategory,
	...props
}: MenuProps) {
	const pathName = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(menuItem);
	const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>(
		undefined
	);
	const shouldReduceMotion = useReducedMotion();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: shouldReduceMotion
				? {}
				: {
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
			opacity: shouldReduceMotion ? 1 : 0,
			height: 0
		}
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory === secondCategory) {
						setAnnounce(m.isOpened ? 'closed' : 'opened');
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
			<ul className={styles['first_level_list']}>
				{firstLevelMenu.map((menu) => (
					<li key={menu.route} aria-expanded={menu.id === firstCategory}>
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
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles['second_block']}>
				{menu.map((item) => {
					if (item.pages.map((p) => p.alias).includes(pathName.split('/')[2])) {
						item.isOpened = true;
					}
					return (
						<li key={item._id.secondCategory}>
							<button
								onKeyDown={(key: KeyboardEvent) =>
									openSecondLevelKey(key, item._id.secondCategory)
								}
								className={styles['second_level']}
								onClick={() => openSecondLevel(item._id.secondCategory)}
								aria-expanded={item.isOpened}
							>
								{item._id.secondCategory}
							</button>
							<motion.ul
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
							</motion.ul>
						</li>
					);
				})}
			</ul>
		);
	};

	const buildThirdLevel = (
		pages: PageItem[],
		route: string,
		isOpened: boolean
	) => {
		return pages.map((p) => (
			<motion.li key={p.alias} variants={variantsChildren}>
				<Link
					tabIndex={isOpened ? 0 : -1}
					aria-current={`/${route}/${p.alias}` === pathName ? 'page' : false}
					href={`/${route}/${p.alias}`}
					className={cn(styles['third_level'], {
						[styles['third_level_active']]: `/${route}/${p.alias}` === pathName
					})}
				>
					{p.category}
				</Link>
			</motion.li>
		));
	};

	return (
		<nav role="navigation" className={cn(className, styles['menu'])} {...props}>
			{announce && (
				<span className="visualy-hidden">
					{announce === 'opened' ? 'развернуто' : 'свернуто'}
				</span>
			)}
			{buildFirstLevel()}
		</nav>
	);
}
