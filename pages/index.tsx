import type { NextPage } from "next";
import { useContext } from "react";
import { HomeHardware, Layout } from "../components/Layout";
import { UiContext } from "../src/context";

const Index: NextPage = () => {
	const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)
	return (
		<Layout
			title={""}
			pageDescription={""}
		>
			<HomeHardware />
		</Layout>
	);
};

export default Index;
