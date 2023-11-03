import { API } from '@/helpers/api';
import { isApiError } from '@/interfaces/error.interface';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel> {
	try {
		const pageResponse = await fetch(API.topPage.byAlias + alias, {
			next: {
				revalidate: 10
			}
		});
		if (!pageResponse.ok) {
			throw new Error(
				`Ошибка получения данных код ошибки ${pageResponse.statusText}`
			);
		}
		const page: TopPageModel = await pageResponse.json();
		return page;
	} catch (e) {
		if (isApiError(e)) {
			throw new Error(
				`Ошибка получения данных. Пожалуйста, повторите попытку позже. ${e.message}`
			);
		}
		throw e;
	}
}
