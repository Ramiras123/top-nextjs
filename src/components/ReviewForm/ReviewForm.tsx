'use client';

import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({
	productId,
	...props
}: ReviewFormProps): JSX.Element => {
	const { register, handleSubmit, control } = useForm<IReviewForm>();
	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles['review-form']} {...props}>
				<Input {...register('name')} placeholder="Имя" />
				<Input
					{...register('title')}
					placeholder="Заголовок отзыва"
					className={styles['title']}
				/>
				<div className={styles['rating']}>
					<span>Оценка:</span>
					<Controller
						name="rating"
						control={control}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								setRating={field.onChange}
								ref={field.ref}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description')}
					className={styles['description']}
					placeholder="Текст отзыва"
				/>
				<div className={styles['submit']}>
					<Button appearance="primary">Отправить</Button>
					<span className={styles['info']}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			<div className={styles['success']}>
				<div className={styles['success-title']}>Ваш отзыв отправлен</div>
				<div className={styles['success-description']}>
					Спасибо, ваш отзыв будет опубликован после проверки
				</div>
				<CloseIcon className={styles['close']} />
			</div>
		</form>
	);
};
