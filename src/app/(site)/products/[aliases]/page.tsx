import { getMenu } from '@/API/menu.api';
import { getPage } from '@/API/page.api';
import { getProducts } from '@/API/products.api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Страница продукта'
	};
}

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap((item) =>
		item.pages.map((page) => ({ alias: page.alias }))
	);
}

export default async function PageProducts({
	params
}: {
	params: { aliases: string };
}) {
	const page = await getPage(params.aliases);
	const products = await getProducts(page.category);
	if (!page || !products) {
		notFound();
	}
	return (
		<div>
			{page.title}
		</div>
	);
}
