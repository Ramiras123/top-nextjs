'use client';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState } from 'react';

export const Rating = ({
	isEditable = false,
	setRating,
	rating,
	...props
}: RatingProps): JSX.Element => {
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
		<div {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => (
				<button
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
		</div>
	);
};
