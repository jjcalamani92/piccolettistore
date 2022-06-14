import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { IHardware, } from "../../src/interfaces";
import { CATEGORY } from "../../src/gql/query";
import { client } from "../../src/apollo";
import { Category} from '../../src/interfaces/Site';
import { request, RequestDocument } from "graphql-request";
import useSWR from "swr";
import { useRouter } from "next/router";
import { SBS } from "../../src/gql/siteQuery";
import { CategoryPreviews01, Spinner01, CategoryPreviews02 } from "../../components/Components";
import { Layout } from "../../components/Layout/Layout";
import Heading01 from "../../components/Components/Heading01";

const fetcher = (query: RequestDocument, variables: string) => request(`${process.env.APIS_URL}/graphql`, query, variables);


const CategoryPage= () => {
	const router = useRouter();
	const { category } = router.query
	const { isValidating, data, error } = useSWR( [SBS, { id: process.env.API_SITE }], fetcher );
	if (isValidating) return <Spinner01 />;
	
  const res = data.site.categories.find(findCategory)
	function findCategory(res:Category){
		return res.href === `${category}`;
	}
	return (
		<Layout
			title={`- ${res.name}`}
			pageDescription={res.name}
			imageFullUrl={res.imageSrc}
		>
      <Heading01 category={`${category}`} />
			<CategoryPreviews01 section={res.sections} category={`${category}`}/>
			{
				res.featured.length === 0
				? null
				: <CategoryPreviews02 featured={res.featured}/>
			}
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await client.query({
		query: CATEGORY,
    variables: { site: `${process.env.API_SITE}`},
	});
	const paths = data.hardwareAll.map((data:IHardware) => ({
    params: { category: data.category}
  }))
	return {
		paths,
		fallback: false
	};
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { category = "" } = params as { category: string };
	return {
		props: {
			category
		},
		revalidate: 60 * 60 * 24
	};
};



export default CategoryPage;