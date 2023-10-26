import { firstLevelMenu } from '@/helpers/helpers';

export async function generateStaticParams() {
	return firstLevelMenu.map((menu) => ({ type: menu.route }));
}

export default function ProductPage({ params }: { params: { type: string } }) {
	return <p>{params.type}</p>;
}
