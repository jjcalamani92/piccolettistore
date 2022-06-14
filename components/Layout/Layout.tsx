import Head from "next/head";
import { FC, useContext } from "react";
import { UiContext } from "../../src/context";
import { Footer01, Header, Search01 } from "../Components";

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl
}) => {
  const { site } = useContext(UiContext)
	
	return (
		<>
			<Head>
				<title>{site.title} {title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
			</Head>
			{/* <HeaderWear /> */}
			<Header />
			<Search01 />
			<main>{children}</main>
      <Footer01 />
		</>
	);
};
