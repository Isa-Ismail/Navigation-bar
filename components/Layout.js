import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function Layout({children}) {
	return (
		<div className="">
			<Head>
				<title>Navigation using nextjs and tailwindcss</title>
				<meta name="description" content="Generated by create next app" />
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