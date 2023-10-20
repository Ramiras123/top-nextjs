import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({
	appearance,
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			className={cn(styles['button'], className, {
				[styles['primary']]: appearance === 'primary',
				[styles['ghost']]: appearance === 'ghost'
			})}
			{...props}
		>
			{children}
		</button>
	);
};
