import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";

const Accordian = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = () => {
		fetch("https://dummyjson.com/posts")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data.posts);
			});
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<MDBAccordion flush initialActive={1}>
			{posts.map((post) => {
				return (
					<MDBAccordionItem key={post.id} collapseId={post.id} headerTitle={post.title}>
						{post.body}
					</MDBAccordionItem>
				);
			})}
		</MDBAccordion>
	);
};

export default Accordian;
