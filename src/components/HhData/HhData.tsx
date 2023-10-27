import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import { Card } from '..';
import RateIcon from './rating.svg';
import { priceRu } from '@/helpers/helpers';

export const HhData = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary
}: HhDataProps): JSX.Element => {
	return (
		<div className={styles['hh']}>
			<Card className={styles['count']}>
				<div className={styles['state_title']}>Всего вакансий</div>
				<div className={styles['state_count']}>{count}</div>
			</Card>
			<Card className={styles['salary']}>
				<div>
					<div className={styles['state_title']}>Начальный</div>
					<div className={styles['state_salary_value']}>
						{priceRu(juniorSalary)}
					</div>
					<div className={styles['state_rate']}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles['state_title']}>Средний</div>
					<div className={styles['state_salary_value']}>
						{priceRu(middleSalary)}
					</div>
					<div className={styles['state_rate']}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles['state_title']}>Профессионал</div>
					<div className={styles['state_salary_value']}>
						{priceRu(seniorSalary)}
					</div>
					<div className={styles['state_rate']}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};
