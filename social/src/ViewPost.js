import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ViewPost.css";

export default function ViewPost() {
	const [ApiError, setApiError] = useState(false);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("jwttoken")) {
			(async () => {
				try {
					const response = await axios.get("http://localhost:3000/posts", {
						headers: {
							authorization: "Bearer " + localStorage.getItem("jwttoken"),
						},
					});
					setData(response.data);
					setLoading(false);
				} catch (error) {
					setApiError(true);
				}
			})();
		} else {
			navigate("/");
		}
	}, []);
	//     ;(async ()=>{
	//         try{
	//        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
	//        setData(response.data);
	//        setLoading(false)
	//         }catch(error){
	//             setApiError(true);
	//         }
	//     })()
	// },[])
	if (ApiError) {
		return <h1>Something went wrong</h1>;
	}
	if (loading) {
		return <h1>Loading.....</h1>;
	}

	const result = data.map((post) => (
		<div key={post.id}>
			<div className="post-content">
				<h4>Title: {post.title}</h4>
				<h4>Content: {post.content}</h4>
				<h4>======================================</h4>
			</div>
		</div>
	));

	return (
		<div className="view-post-container">
			<center>
				<h1>Social Media App</h1>
			</center>
			<h2>Posts :</h2>
			{result}
			<span>
				<Link to="/createpost" className="button">
					Create Post
				</Link>
				<Link to="/" className="button">
					Logout
				</Link>
			</span>
		</div>
	);
}
