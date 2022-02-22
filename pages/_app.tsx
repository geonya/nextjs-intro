import NavBar from "../components/NavBar";
import "../styles/globals.css";

interface IApp {
	Component: any;
	pageProps: any;
}

export default function App({ Component, pageProps }: IApp) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}
