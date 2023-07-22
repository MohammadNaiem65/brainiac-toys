const Blogs = () => {
	return (
		<div className='container'>
			<>
				<h2 className='p-4 text-4xl font-bubblegum bg-secondary rounded'>
					What is an Access token and Refresh Token?
				</h2>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>An Access token</span> is a
					credential that can be used by an application to access an
					API. It can be any type of token and is meant to
					authenticate the API's caller's identity and security
					privileges. Access tokens are used in token-based
					authentication to allow an application to access an API. The
					application receives an access token after a user
					successfully authenticates and authorizes access, then
					passes the access token as a credential when it calls the
					target API. The passed token informs the API that the bearer
					of the token has been authorized to access the API and
					perform specific actions specified by the scope that has
					been granted.
				</p>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>A Refresh token</span> is a
					special kind of token that can be used to obtain a renewed
					access token, which allows you to have short-lived access
					tokens without having to collect credentials every time one
					expires. You request a refresh token alongside the access
					and/or ID tokens as part of a user's initial authentication
					and authorization flow. After the user successfully
					authenticates and grants consent for the application to
					access the protected resource, the application will receive
					an authorization code that can be exchanged at the token
					endpoint for both an access and a refresh token
				</p>
			</>
			<>
				<h2 className='p-4 mt-10  text-4xl font-bubblegum bg-secondary rounded'>
					Compare SQL and NoSQL databases?
				</h2>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>SQL and NoSQL</span> are two types
					of databases that differ in their structures, scalability,
					relationships, language, and support.
				</p>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>SQL</span>, or{' '}
					<span className='text-xl'>Structured Query Language </span>
					is a well-known query language for relational databases.
					They are commonly referred to as relational database
					management systems (RDBMS). These systems use SQL syntax and
					utilize row-based database structures that connect related
					data objects between tables. A SQL databases scale
					vertically, usually on a single server, and require users to
					increase physical hardware to increase their storage
					capacities.
				</p>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>NoSQL </span>databases, on the
					other hand, are databases without any structured tables
					fixed for holding data. They can be set up very quickly and
					with minimal pre-planning. NoSQL databases offer horizontal
					scalability, meaning that more servers simply need to be
					added to increase their data load. This means that NoSQL
					databases are better for modern cloud-based infrastructures,
					which offer distributed resources.
				</p>
			</>
			<>
				<h2 className='p-4 mt-10  text-4xl font-bubblegum bg-secondary rounded'>
					What is express js? What is Nest JS?
				</h2>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>Express.js</span> is a Node.js web
					application framework that provides a wide range of
					functionality for creating web and mobile applications. It
					is a tool built on top of Node.js that helps the management
					of servers and routes. Express.js can be used with Node to
					create single-page, multi-page, or hybrid web applications.
				</p>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>NestJS </span> is a progressive
					Node.js framework for building efficient, scalable, and
					reliable server-side applications. It's built on top of
					Express.js and provides a more structured way of building
					applications with TypeScript. NestJS uses a modular
					architecture and is inspired by Angular, making it easy to
					maintain and scale applications as they grow. It provides
					built-in support for dependency injection, which makes it
					easier to manage dependencies and write modular and scalable
					code.
				</p>
			</>
			<>
				<h2 className='p-4 mt-10  text-4xl font-bubblegum bg-secondary rounded'>
					What is MongoDB aggregate and how does it work?
				</h2>
				<p className='mt-5 px-5 text-justify'>
					<span className='text-xl'>MongoDB aggregation</span> is a
					technique of processing a large number of documents in a
					collection by passing them through different stages. These
					stages make up a pipeline. The stages in a pipeline can
					filter, sort, group, reshape, and modify documents that pass
					through the pipeline. One of the most common use cases of
					Aggregation is to calculate aggregate values for groups of
					documents. This is similar to the basic aggregation
					available in SQL with the GROUP BY clause and COUNT, SUM,
					and AVG functions.
				</p>
				<p className='mt-5 px-5 text-justify'>
					Aggregation operations process data records and return
					computed results. MongoDB provides two methods to perform
					aggregation: single-purpose aggregation and aggregation
					pipeline. The simplest is single-purpose aggregation.
					Single-purpose aggregation operations are a collection of
					helper methods applied to a collection to calculate a
					result. These helper methods enable simple access to common
					aggregation processes
				</p>
			</>
		</div>
	);
};

export default Blogs;
