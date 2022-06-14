import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { IClothing } from "../../../../src/interfaces";
import { useQuery } from "@apollo/client";
import { client } from "../../../../src/apollo";
import React, { Component } from "react";
import { useRouter } from "next/router";
import { ITEM, PRODUCTS_BY_ITEM } from "../../../../src/gql/query";
import { Layout } from "../../../../components/Layout";
import Heading01 from "../../../../components/Components/Heading01";
import { LayoutProductlist01, Spinner01 } from "../../../../components/Components";




const ItemPage = () => {
	const router = useRouter();
  const { category, section, item } = router.query
  
  const { loading, error, data } = useQuery(PRODUCTS_BY_ITEM, {
    variables: { category: `${category}`, section: `${section}`, item: `${item}`, site: `${process.env.API_SITE}`},
  });
  if (loading) return <Spinner01 />;
  return (
    <>  
      <Layout
        title={`- ${item}`}
        pageDescription='{re.name}'
    >
      <Heading01 category={`${category}`} section={`${section}` } item={`${item}` } />
      <LayoutProductlist01 products={data.clothingByCategoryAndSectionAndItem} />
    </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await client.query({
		query: ITEM,
    variables: { site: `${process.env.API_SITE}`},
	});
  const paths = data.clothingAll.map((data:IClothing) => ({
    params: { category: data.category, section: data.section, item: data.item }
  })
  )
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { item = "" } = params as { item: string };
  return {
    props: {
      item,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ItemPage;

