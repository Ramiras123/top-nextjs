import { IReviewForm } from '@/components/ReviewForm/ReviewForm.interface';
import { API } from '@/helpers/api';
import { isApiError } from '@/interfaces/error.interface';
import { IReviewSentResponse } from '@/interfaces/review.interface';

export async function sendReview(
	formData: IReviewForm,
	productId: string
): Promise<IReviewSentResponse> {
	try {
		const productResponse = await fetch(API.review.createDemo, {
			method: 'POST',
			body: JSON.stringify({
				...formData,
				productId
			}),
			headers: new Headers({ 'Content-Type': 'application/json' })
		});
		if (!productResponse.ok) {
			throw new Error(
				`Ошибка получения данных код ошибки ${productResponse.statusText}`
			);
		}
		const products: IReviewSentResponse = await productResponse.json();
		return products;
	} catch (e) {
		if (isApiError(e)) {
			throw new Error(
				`Ошибка получения данных. Пожалуйста, повторите попытку позже. ${e.message}`
			);
		}
		throw e;
	}
}
