import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
			{articles.map((article) => (
				<ArticleCard key={article.id} article={article} />
			))}
		</div>
	);
};

export default ArticleList;
