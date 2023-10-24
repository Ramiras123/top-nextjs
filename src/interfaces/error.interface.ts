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
