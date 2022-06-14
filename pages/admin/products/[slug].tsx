import { NextPage, GetServerSideProps } from 'next';
import { PRODUCT_BY_SLUG } from '../../../src/gql/query';
import { IClothing } from "../../../src/interfaces";
import { GraphQLClient } from 'graphql-request';
import Clothing from '../../../src/db/clothing.schema';
import { Form } from '../../../components/Components';
import { LayoutAdmin } from '../../../components/Layout';
interface Props {
	product: IClothing;
}
const client = new GraphQLClient(`${process.env.APIP_URL}/graphql`)
const ProductPage: NextPage<Props> = ({ product }) => {
	return (
		<>
			<LayoutAdmin>
				<Form product={product} />
			</LayoutAdmin>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { slug = '' } = query
	let product:IClothing | null | any;
	if (slug === 'new') {
		const tempProduct = JSON.parse( JSON.stringify( new Clothing() ) );
		delete tempProduct._id;
    product = tempProduct;
	} else {
		const data = await client.request(
			PRODUCT_BY_SLUG, { slug: query.slug, site: process.env.API_SITE }
		);
		product = data.clothingBySlug
	}
return {
	props: {
		product
	},
};
}

export default ProductPage;