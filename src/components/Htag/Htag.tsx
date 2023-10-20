import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	const Tag = tag;
	return <Tag className={styles[tag]}>{children}</Tag>;
};
