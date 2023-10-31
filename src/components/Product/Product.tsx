'use client';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';

export const Product = ({ product, ...props }: ProductProps): JSX.Element => {
	return <div {...props}>{product.title}</div>;
};
