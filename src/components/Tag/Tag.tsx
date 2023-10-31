import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
	children,
	className,
	appearance = 'medium',
	color = 'ghost',
	href,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(
				className,
				styles['tag'],
				styles[appearance],
				styles[color]
			)}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
