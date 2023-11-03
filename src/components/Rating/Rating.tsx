'use client';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { ForwardedRef, forwardRef, useEffect, useState } from 'react';

export const Rating = forwardRef(
	(
		{ isEditable = false, setRating, rating, error, ...props }: RatingProps,
		ref: ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
			new Array(5).fill(<></>)
		);

		useEffect(() => {
			constructRating(rating);
		}, [rating]);

		const changeDisplay = (index: number) => {
			if (!isEditable) {
				return;
			}
			constructRating(index);
		};

		const onClick = (index: number) => {
			if (!isEditable || !setRating) {
				return;
			}
			setRating(index);
		};

		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
				return (
					<StarIcon
						className={cn({
							[styles['filled']]: i < currentRating,
							[styles['editable']]: isEditable
						})}
					/>
				);
			});
			setRatingArray(updatedArray);
		};

		return (
			<div
				ref={ref}
				{...props}
				className={cn({
					[styles['error']]: error
				})}
			>
				{ratingArray.map((r: JSX.Element, i: number) => (
					<button
						type="button"
						className={styles['button_star']}
						key={i}
						tabIndex={isEditable ? 0 : -1}
						onMouseEnter={() => changeDisplay(i + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClick(i + 1)}
					>
						{r}
					</button>
				))}
				{error && (
					<span className={styles['error_message']}>{error.message}</span>
				)}
			</div>
		);
	}
);
