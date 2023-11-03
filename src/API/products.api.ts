import { API } from '@/helpers/api';
import { isApiError } from '@/interfaces/error.interface';
import { ProductModule } from '@/interfaces/product.interface';

export async function getProducts(category: string): Promise<ProductModule[]> {
	try {
		const productResponse = await fetch(API.topPage.find, {
			method: 'POST',
			body: JSON.stringify({
				category: category,
				limit: 10
			}),
			headers: new Headers({ 'Content-Type': 'application/json' })
		});
		if (!productResponse.ok) {
			throw new Error(
				`Ошибка получения данных код ошибки ${productResponse.statusText}`
			);
		}
		const products = await productResponse.json();

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
