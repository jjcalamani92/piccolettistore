import { useState } from "react";
import { PRODUCT_ALL } from '../../src/gql/query';
import { useQuery } from '@apollo/client';
import request, { RequestDocument } from "graphql-request";
import Link from 'next/link';
import { Spinner04, Table02, Pagination01 } from "../../components/Components";
import { LayoutAdmin } from "../../components/Layout";


const PAGE_SIZE = 5;
const fetcher = (query: RequestDocument, variables: string) => request(`${process.env.APIP_URL}/graphql`, query, variables);

const AdminPage = () => {
	const [page, setPage] = useState(0)
	
	const { loading, error, data, fetchMore } = useQuery(PRODUCT_ALL, {variables: { limit: PAGE_SIZE, offset: page*PAGE_SIZE, site: process.env.API_SITE }});
	if (loading) return <Spinner04 />;
	return (
		<>
			<LayoutAdmin>
				<div className="my-6 container px-6 mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
					<h4 className="text-2xl font-bold leading-tight text-gray-800">Productos</h4>
					<Link href="/admin/products/new">
						<a  className="transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-700 rounded text-white px-8 py-2 text-sm">Nuevo Producto</a>
					</Link>
				</div>
				<Table02 products={data.hardwaresAll} />
				<Pagination01 setPage={setPage} page={page} length={data.hardwaresAll.length} all={PAGE_SIZE} />
			</LayoutAdmin>
		</>

	);
};
export default AdminPage;
