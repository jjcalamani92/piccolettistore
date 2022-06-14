import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useQuery } from "@apollo/client";
import { IHardware } from "../../src/interfaces";
import { HARDWARES, PRODUCT_BY_SLUG } from "../../src/gql/query";
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
      <Heading01 category={`${data.hardwareBySlug.category}`} section={`${data.hardwareBySlug.section}`} item={`${data.hardwareBySlug.item}`} name={`${data.hardwareBySlug.name}`}/>
			<ProductOverviews05 product={data.hardwareBySlug} />
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
		query: HARDWARES
	});
	const paths = data.hardwares.map((data: IHardware) => ({
		params: { slug: data.slug }
	}));
	return {
		paths,
		fallback: "blocking"
	};
};
export default SlugPage;
