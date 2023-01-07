const dev = process.env.NODE_ENV !== "production";

// checks to see if we are in development, then assigns server to localhost else provided domain
export const server = dev
	? "http://localhost:3000"
	: "https://websitedomain.com";
