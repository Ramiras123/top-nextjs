import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
	children,
	appearance = 'medium',
	...props
}: ParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles['p'], styles[appearance])} {...props}>
			{children}
		</p>
	);
};
