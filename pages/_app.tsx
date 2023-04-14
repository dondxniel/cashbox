import "animate.css";
import type { AppProps } from "next/app";
import DialogContextContainer from "../context/Dialog.context";
import GeneralContextContainer from "../context/General.context";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GeneralContextContainer>
			<DialogContextContainer>
				<Component {...pageProps} />
			</DialogContextContainer>
		</GeneralContextContainer>
	);
}
