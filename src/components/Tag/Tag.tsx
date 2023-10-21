import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
	children,
	appearance = 'medium',
	color = 'ghost',
	href,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles['tag'], styles[appearance], styles[color])}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
