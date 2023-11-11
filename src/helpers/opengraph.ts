import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const OpengraphTags: OpenGraph = {
	url: process.env.NEXT_PUBLIC_DOMIAN,
	locale: 'ru_Ru',
	type: 'article'
};
