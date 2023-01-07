import Link from "next/link";

const ArticleCard = ({ article }) => {
	return (
		<Link href="/article/[id]" as={`/article/${article.id}`}>
			<div className="p-5 h-72 rounded-lg border border-gray-300 text-black hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
				<h3 className="text-lg font-bold mb-2">{article.title} &rarr;</h3>
				<p>{article.body}</p>
			</div>
		</Link>
	);
};

export default ArticleCard;
