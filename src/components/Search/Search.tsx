'use client';

import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { Button, Input } from '@/components/';
import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push(`/search?q=${search}`);
	};
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles['search'])} {...props}>
			<Input
				placeholder="Поиск..."
				value={search}
				className={styles['input']}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles['button']}
				onClick={goToSearch}
			>
				<GlassIcon />
			</Button>
		</div>
	);
};
