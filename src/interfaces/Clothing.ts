export interface IClothing {
	_id: string;
	name: string;
	brand: string;
	image: string[];
	description: string;
	inStock: number;
	sizes: string[];
	slug: string;
	category: string;
	section: string;
	item: string;
	price: number;
	oldPrice: number;
	color: string;
	tags: string[];
	client: string;
	status: boolean;
	site: string;
}