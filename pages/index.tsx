import CashBecameMobile from "../components/compound/home/CashBecameMobile";
import Hero from "../components/compound/home/Hero";
import MakeSomeCash from "../components/compound/home/MakeSomeCash";
import SchoolCommerce from "../components/compound/home/SchoolCommerce";
import Layout from "../components/layouts/PageLayout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<SchoolCommerce />
			<CashBecameMobile />
			<MakeSomeCash />
		</Layout>
	);
}
