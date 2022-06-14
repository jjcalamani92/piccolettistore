import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useQuery } from "@apollo/client";
import { IClothing } from "../../src/interfaces";
import { CLOTHINGS, PRODUCT_BY_SLUG } from "../../src/gql/query";
import { client } from "../../src/apollo";
import { Spinner01, ProductOverviews05 } from "../../components/Components";
import { Layout } from "../../components/Layout";
import Heading01 from "../../components/Components/Heading01";

interface SlugPage {
	slug: string;
}

const SlugPage: NextPage<SlugPage> = ({ slug }) => {
	const { loading, error, data } = useQuery(PRODUCT_BY_SLUG, {
		variables: { slug: `${slug}`, site: process.env.API_SITE }
	});
	if (loading) return <Spinner01 />;
	return (
		<Layout
			title={"- Detalles"}
			pageDescription={"Detalles de los productos"}
		>
      <Heading01 category={`${data.clothingBySlug.category}`} section={`${data.clothingBySlug.section}`} item={`${data.clothingBySlug.item}`} name={`${data.clothingBySlug.name}`}/>
			<ProductOverviews05 product={data.clothingBySlug} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as { slug: string };
	return {
		props: {
			slug
    },
    revalidate: 60 * 60 * 24
  }
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await client.query({
		query: CLOTHINGS
	});
	const paths = data.clothings.map((data: IClothing) => ({
		params: { slug: data.slug }
	}));
	return {
		paths,
		fallback: "blocking"
	};
};
export default SlugPage;
