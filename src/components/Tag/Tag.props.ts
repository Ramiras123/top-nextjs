import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	appearance?: 'medium' | 'small';
	color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
	href?: string;
}
