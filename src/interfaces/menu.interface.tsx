export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	pages: PageItem[];
}


export interface ErrorMessageMenu {
	statusCode: number;
	message: string[];
	error: string;
}

export function isApiError(x: unknown): x is ErrorMessageMenu {
	if (x && typeof x === 'object' && 'code' in x) {
		return true;
	}
	return false;
}