'use client';

import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
	children,
	appearance = 'medium',
	className,
	...props
}: ParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles['p'], className, styles[appearance])} {...props} data-cy='paragraph'>
			{children}
		</p>
	);
};
