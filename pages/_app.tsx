import "../styles/globals.css";
import glob from "glob";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

export async function getStaticProps() {
	const baseUrl = {
		development: "http://localhost:5000",
		production: "https://mydomain.com",
	}[process.env.NODE_ENV];
	const pages = await glob("pages/**/*.js", { cwd: __dirname });
	console.log("PAGES", pages);
}
