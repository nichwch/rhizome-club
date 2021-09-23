import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div style={{ marginLeft: "auto", marginRight: "auto", width: "600px" }}>
			<h1>RHIZOME.CLUB</h1>
			<i>"Since each of us was several, there was already quite a crowd."</i>
			<h2>rhizome.club is the online home of the Davis Hypertext Society</h2>
			<p>The Davis Hypertext Society does 2 things.</p>
			<h3>1. Website review (THEORY)</h3>
			<p>
				Every week, members pick a cool website (a site with extraordinarily
				cool design/animations/content/vibes)by voting. We then meet up as a
				group to discuss/critique the website, and look under the hood to see
				how it's made.
			</p>
			<h3>2. Maintain rhizome.club (PRACTICE)</h3>
			<p>
				The current site is a loose amalgation of individual web pages submitted
				by members. The site is open source, and
			</p>
		</div>
	);
}
