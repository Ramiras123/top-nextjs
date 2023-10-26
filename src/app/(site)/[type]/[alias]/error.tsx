'use client';

import { Button } from '@/components';
import styles from './error.module.css';

export default function Error({
	error,
	reset
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<>
			<div className={styles['error']}>
				Что то пошло не так - Product {JSON.stringify(error.message)}
			</div>
			<Button appearance="primary" onClick={() => reset()}>
				Повторить
			</Button>
		</>
	);
}
