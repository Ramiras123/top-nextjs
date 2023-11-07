'use client';

import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';

export const ButtonIcon = ({
	appearance,
	className,
	icon,
	...props
}: ButtonIconProps) => {
	const IconComp = icons[icon];
	return (
		<button
			className={cn(styles['button'], className, styles[appearance])}
			{...props}
		>
			<IconComp />
		</button>
	);
};
