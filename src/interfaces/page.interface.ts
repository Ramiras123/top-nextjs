export interface TopPageModel {
	_id: string;
	tags: string[];
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages?: TopPageAdvantage[];
	createdAt: string;
	updatedAt: string;
	__v: number;
	hh?: HhData;
	qas: Qa[];
	addresses: unknown[];
	categoryOn: string;
	blog: Blog;
	sravnikus: Sravnikus;
	learningclub: Sravnikus;
}

export enum TopLevelCategory {
	Curses,
	Services,
	Books,
	Products
}

export interface Sravnikus {
	metaTitle: string;
	metaDescription: string;
	qas: Qa[];
	_id: string;
}

export interface Blog {
	h1: string;
	metaTitle: string;
	metaDescription: string;
	views: number;
	_id: string;
}

export interface HhData {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: string;
	_id: string;
}

export interface TopPageAdvantage {
	title: string;
	description: string;
	_id: string;
}

export interface Qa {
	question: string;
	answer: string;
}

