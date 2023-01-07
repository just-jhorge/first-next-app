import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
	return (
		<>
			<Navigation />
			<div className="container mx-auto">
				<main className="">
					<Header />
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
