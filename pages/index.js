import Head from "next/head";
import Demo from "../components/Demo";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<Layout>
			<HeroSection />
		</Layout>
	);
}
