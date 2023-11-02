import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';

export const ReviewForm = ({
	productId,
	...props
}: ReviewFormProps): JSX.Element => {
	return (
		<>
			<div className={styles['review-form']} {...props}>
				<Input placeholder="Имя" />
				<Input placeholder="Заголовок отзыва" className={styles['title']} />
				<div className={styles['rating']}>
					<span>Оценка:</span>
					<Rating rating={0} />
				</div>
				<Textarea
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
				<div className={styles['success-description']}>Спасибо, ваш отзыв будет опубликован после проверки
				</div>
				<CloseIcon className={styles['close']} />
			</div>
		</>
	);
};
