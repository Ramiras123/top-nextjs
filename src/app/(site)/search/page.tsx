'use client';

import { useSearchParams } from 'next/navigation';

export default async function PageProducts() {
	const getSearch = useSearchParams();
	const search = getSearch.get('q');
	return <div>Search {search}</div>;
}
