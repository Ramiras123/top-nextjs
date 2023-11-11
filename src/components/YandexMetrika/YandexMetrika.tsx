'use client';

//import { useEffect } from 'react';
//import { usePathname, useSearchParams } from 'next/navigation';
import ym from 'react-yandex-metrika';
import { Router } from 'next/router';

export default function YandexMetrika() {
//	const pathname = usePathname();
//	const searchParams = useSearchParams();

	// useEffect(() => {
	// 	const url = `${pathname}?${searchParams}`;
	// 	ym('hit', url);
	// }, [pathname, searchParams]);
	Router.events.on('routeChangeComplete', (url: string) => {
		if (typeof window !== 'undefined') {
			ym('hit', url);
		}
	});
	return null;
}
