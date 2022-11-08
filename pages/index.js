import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout SEO="hello" title="Home">
			<HeroSection />
		</Layout>
	);
}
