'use client';

import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';
import { sendReview } from '@/API/review.api';
import { useState } from 'react';

export const ReviewForm = ({
	productId,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<Error>();

	const onSubmit = async (formdata: IReviewForm) => {
		const review = await sendReview(formdata, productId);
		if (review.message.includes('undefined')) {
			setIsSuccess(false);
			setError({
				message: 'Что то пошло не так',
				name: review.message
			});
		} else {
			setIsSuccess(true);
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles['review-form']} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					placeholder="Имя"
					error={errors.name}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' }
					})}
					placeholder="Заголовок отзыва"
					className={styles['title']}
					error={errors.title}
				/>
				<div className={styles['rating']}>
					<span>Оценка:</span>
					<Controller
						name="rating"
						control={control}
						rules={{
							required: {
								value: true,
								message: 'Укажите рейтинг'
							}
						}}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								setRating={field.onChange}
								ref={field.ref}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Заполните отзыв' }
					})}
					className={styles['description']}
					placeholder="Текст отзыва"
					error={errors.description}
				/>
				<div className={styles['submit']}>
					<Button appearance="primary">Отправить</Button>
					<span className={styles['info']}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={cn(styles['panel'], styles['success'])}>
					<div className={styles['success-title']}>Ваш отзыв отправлен</div>
					<div className={styles['success-description']}>
						Спасибо, ваш отзыв будет опубликован после проверки
					</div>
					<CloseIcon
						className={styles['close']}
						onClick={() => setIsSuccess(false)}
					/>
				</div>
			)}
			{error && (
				<div className={cn(styles['panel'], styles['error'])}>
					{error.message}
					<CloseIcon
						className={styles['close']}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};
