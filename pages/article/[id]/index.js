import Link from "next/link";
import { server } from "../../../config";

const article = ({ article }) => {
	// const router = useRouter();
	// const { id } = router.query;

	console.log(article);

	return (
		<>
			<div className="mb-10">
				<h1 className="text-8xl mb-5">{article.title}</h1>
				<p className="text-2xl">{article.body}</p>
			</div>
			<Link
				className="hover:text-blue-500 transition-colors duration-150"
				href="/"
			>
				Go back &larr;
			</Link>
		</>
	);
};

export const getStaticProps = async (context) => {
	const res = await fetch(`${server}/api/articles/${context.params.id}`);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();
	const ids = articles.map((article) => article.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

// export const getStaticProps = async (context) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
// 	);
// 	const article = await res.json();

// 	return {
// 		props: {
// 			article,
// 		},
// 	};
// };

// export const getStaticPaths = async () => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// 	const articles = await res.json();
// 	const ids = articles.map((article) => article.id);
// 	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

export default article;
