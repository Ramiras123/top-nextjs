'use client';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import {
	ForwardedRef,
	KeyboardEvent,
	forwardRef,
	useEffect,
	useRef,
	useState
} from 'react';

export const Rating = forwardRef(
	(
		{
			isEditable = false,
			setRating,
			rating,
			error,
			tabIndex,
			...props
		}: RatingProps,
		ref: ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
			new Array(5).fill(<></>)
		);
		const ratingArrayRef = useRef<(HTMLButtonElement | null)[]>([]);

		useEffect(() => {
			constructRating(rating);
		}, [rating, tabIndex]);

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

		const handleKey = (e: KeyboardEvent) => {
			if (!isEditable || !setRating) {
				return;
			}
			if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
				if (!rating) {
					setRating(1);
				} else {
					e.preventDefault();
					setRating(rating < 5 ? rating + 1 : 5);
				}
				ratingArrayRef.current[rating]?.focus();
			}
			if (e.code === 'ArrowDown' || e.code === 'ArrowLeft') {
				e.preventDefault();
				setRating(rating > 1 ? rating - 1 : 1);
				ratingArrayRef.current[rating - 2]?.focus();
			}
		};

		const computeFocus = (r: number, i: number): number => {
			if (!isEditable || !setRating) {
				return -1;
			}
			if (!rating && i === 0) {
				return tabIndex ?? 0;
			}
			if (r === i + 1) {
				return tabIndex ?? 0;
			}
			return -1;
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
						tabIndex={computeFocus(rating, i)}
						ref={(r) => ratingArrayRef.current?.push(r)}
						onMouseEnter={() => changeDisplay(i + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClick(i + 1)}
						onKeyDown={handleKey}
						role={isEditable ? 'slider' : ''}
						aria-valuenow={rating}
						aria-valuemax={5}
						aria-valuemin={1}
						aria-label={
							isEditable ? 'Укажите рейтинг стрелками' : 'рейтинг' + rating
						}
						aria-invalid={error ? true : false}
					>
						{r}
					</button>
				))}
				{error && (
					<span role="alert" className={styles['error_message']}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
