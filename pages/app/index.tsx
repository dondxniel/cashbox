import { useRouter } from "next/router";
import { useEffect } from "react";
import ChatSection from "../../components/complex/app/ChatSection";
import ConversationsSection from "../../components/complex/app/ConversationsSection";
import AppLayout from "../../components/layouts/app/AppLayout";
import PageSectionLayout from "../../components/layouts/app/small/PageSectionLayout";

function Index() {
	const router = useRouter();
	useEffect(() => {}, [router.query]);
	return (
		<AppLayout>
			<PageSectionLayout>
				<ConversationsSection />
			</PageSectionLayout>
			{router.query.chat && (
				<PageSectionLayout>
					<ChatSection />
				</PageSectionLayout>
			)}
		</AppLayout>
	);
}

export default Index;
