'use client';

import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(
	(
		{ className, error, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(className, styles['input_wrapper'])}>
				<textarea
					ref={ref}
					className={cn(styles['textarea'], {
						[styles['error']]: error
					})}
					{...props}
				/>
				{error && (
					<span role="alert" className={styles['error_message']}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
