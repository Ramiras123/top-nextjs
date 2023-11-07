'use client';

import classNames from 'classnames';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '../../logo.svg';
import { ButtonIcon } from '@/components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const Header = ({
	className,
	children,
	...props
}: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const router = usePathname();

	useEffect(() => {
		setIsOpened(false);
	}, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%'
		}
	};

	return (
		<header className={classNames(className, styles['header'])} {...props}>
			<Logo />
			<ButtonIcon
				appearance="white"
				icon="menu"
				onClick={() => setIsOpened(true)}
			/>
			<motion.div
				className={styles['mobile_menu']}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				{children}
				<ButtonIcon
					className={styles['menu_close']}
					appearance="white"
					icon="close"
					onClick={() => setIsOpened(false)}
				/>
			</motion.div>
		</header>
	);
};
