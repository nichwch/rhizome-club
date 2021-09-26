import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div
			style={{
				marginLeft: "auto",
				marginRight: "auto",
				width: "600px",
			}}
		>
			<h1>RHIZOME.WORLD</h1>
			<i>"Since each of us was several, there was already quite a crowd."</i>
			<h2>rhizome.world is the online home of the Davis Hypertext Society</h2>
			<p>The Davis Hypertext Society does 2 things.</p>
			<h3>1. THEORY: Website review</h3>
			<p>
				Every week, members pick a cool website (a site with extraordinarily
				cool design/animations/content/vibes)by voting. We then meet up as a
				group to discuss/critique the website, and look under the hood to see
				how it's made.
			</p>
			<h3>2. PRACTICE: Maintain rhizome.world</h3>
			<p>
				The site you are looking at is a loose amalgamation of individual web
				pages submitted by members. The site is open source. Individuals are
				encouraged to submit their own pages to be added to the site, and are
				free to link to other peoples pages as they'd like.
			</p>
			<p>
				The idea is to provide a space for people to experiment with one-off web
				concepts. Make a site dedicated to a three.js experiment, a new layout
				you want to try, a miniature game, a new UI element you've been toying
				with, for your musical/artistic/film project, just to introduce yourself
				- anything.
				<p style={{ fontWeight: "bold" }}>
					The goal is to try and recreate the feeling of a musical jam session,
					within a website.
				</p>
			</p>
			<p>
				The important rules are simple. Don't touch other people's stuff, and
				don't post anything political or offensive.
			</p>
			<p>
				We have some other technical conventions we follow, just to make sure
				people don't step on each other's toes. These can be found in the README
				in the github repo.
			</p>
			<p style={{ textAlign: "center" }}>
				=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
			</p>
			<form
				style={{
					textAlign: "center",
					marginBottom: "20px",
				}}
				action="https://tinyletter.com/rhizome"
				method="post"
				target="popupwindow"
				onSubmit={() => {
					window.open(
						"https://tinyletter.com/rhizome",
						"popupwindow",
						"scrollbars=yes,width=800,height=600"
					);
					return true;
				}}
			>
				<h2>
					<label htmlFor="tlemail">Sign up for email updates</label>
				</h2>
				<p>
					Join our mailing list to receive updates on when the Davis Hypertext
					Society meets.
				</p>
				<p>
					<input
						type="text"
						style={{ width: "140px" }}
						name="email"
						id="tlemail"
					/>
				</p>
				<input type="hidden" value="1" name="embed" />
				<input type="submit" value="Subscribe" />
				<p>
					{/* <a href="https://tinyletter.com" target="_blank">
						powered by TinyLetter
					</a> */}
				</p>
			</form>
		</div>
	);
}
