import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
	return (
		<>
			<Head>
				<title>WebDev Newz - Home</title>
				<meta name="keywords" content="Web Development, Programming" />
			</Head>
			<ArticleList articles={articles} />
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};

// export const getStaticProps = async () => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?_limit=10`
// 	);
// 	const articles = await res.json();

// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };
