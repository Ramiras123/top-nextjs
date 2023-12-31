import { MenuItem } from '@/interfaces/menu.interface';
import { isApiError } from '@/interfaces/error.interface';
import { API } from '@/helpers/api';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	try {
		const menuResponse = await fetch(API.product.find, {
			method: 'POST',
			body: JSON.stringify({ firstCategory }),
			headers: new Headers({ 'Content-Type': 'application/json' })
		});
		if (!menuResponse.ok) {
			throw new Error(
				`Ошибка получения данных код ошибки ${menuResponse.statusText}`
			);
		}
		const menu: MenuItem[] = await menuResponse.json();
		return menu;
	} catch (e) {
		if (isApiError(e)) {
			throw new Error(
				`Ошибка получения данных. Пожалуйста, повторите попытку позже. ${e.message}`
			);
		}
		throw e;
	}
}
