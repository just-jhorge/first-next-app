import Link from "next/link";

const Navigation = () => {
	return (
		<nav className="bg-white shadow-md h-10 flex items-center justify-center">
			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="font-black">
					WebDev
				</Link>
				<div className="flex gap-10">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
