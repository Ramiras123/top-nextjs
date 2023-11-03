import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(
	(
		{ children, color = 'white', className, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		return (
			<div
				ref={ref}
				className={cn(styles['card'], className, styles[color])}
				{...props}
			>
				{children}
			</div>
		);
	}
);
