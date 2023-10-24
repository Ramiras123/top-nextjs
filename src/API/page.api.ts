import { isApiError } from '@/interfaces/error.interface';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel> {
	try {
		const pageResponse = await fetch(
			process.env.NEXT_PUBLIC_DOMIAN + '/api/top-page/byAlias/' + alias
		);
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