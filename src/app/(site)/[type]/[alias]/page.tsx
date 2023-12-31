import { getMenu } from '@/API/menu.api';
import { getPage } from '@/API/page.api';
import { getProducts } from '@/API/products.api';
import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TopPageComponent } from './page-components';
import { OpengraphTags } from '@/helpers/opengraph';

export async function generateMetadata({
	params
}: {
	params: { alias: string; type: string };
}): Promise<Metadata> {
	const page = await getPage(params.alias);

	return {
		title: page.metaTitle,
		description: page.metaDescription,
		openGraph: {
			...OpengraphTags,
			url: OpengraphTags.url + '/' + params.type + '/' + params.alias,
			title: page.metaTitle,
			description: page.metaDescription
		}
	};
}

export type PathsItem = {
	alias: string;
	type: string;
};

export async function generateStaticParams() {
	let paths: PathsItem[] = [];
	for (const m of firstLevelMenu) {
		const menu = await getMenu(m.id);
		paths = paths.concat(
			menu.flatMap((menuItem) =>
				menuItem.pages.map((page) => ({ alias: page.alias, type: m.route }))
			)
		);
	}
	return paths;
}

export default async function PageProducts({ params }: { params: PathsItem }) {
	const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
	if (!firstCategoryItem) {
		notFound();
	}
	//const menu = await getMenu(firstCategoryItem.id);
	const page = await getPage(params.alias);
	const products = await getProducts(page.category);
	if (!page || !products || !firstCategoryItem) {
		notFound();
	}
	return (
		<TopPageComponent
			firstCategory={firstCategoryItem.id}
			page={page}
			products={products.sort((a, b) =>
				a.initialRating > b.initialRating ? -1 : 1
			)}
		/>
	);
}
