import { MenuItem } from '@/interfaces/menu.interface';
import { isApiError } from '@/interfaces/error.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_DOMIAN + '/api/top-page/find',
			{
				method: 'POST',
				body: JSON.stringify({ firstCategory }),
				headers: new Headers({ 'Content-Type': 'application/json' })
			}
		);
		if (!res.ok) {
			throw new Error(`Ошибка получения данных код ошибки ${res.statusText}`);
		}
		const data: MenuItem[] = await res.json();
		return data;
	} catch (e) {
		if (isApiError(e)) {
			throw new Error(
				`Ошибка получения данных. Пожалуйста, повторите попытку позже. ${e.message}`
			);
		}
		throw e;
	}
}
