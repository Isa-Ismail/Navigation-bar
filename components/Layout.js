import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function Layout({children, title, SEO}) {
	return (
		<div className="">
			<Head>
				<title>{title ? `${title} - Product name` : 'Product name'}</title>
				<meta name="description" content={SEO} />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Navbar />
			<main className="min-h-screen">
                {children}
            </main>
            <Footer />
		</div>
	);
}