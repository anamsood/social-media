import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";

export default function CreatePost() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("jwttoken")) {
			navigate("/");
		}
	}, []);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const handleTitle = (event) => {
		setTitle(event.target.value);
	};
	const handleContent = (event) => {
		setContent(event.target.value);
	};
	const handleForm = async (event) => {
		try {
			event.preventDefault();
			const response = await axios.post(
				"http://localhost:3000/posts",
				{
					title: title,
					content: content,
				},
				{
					headers: {
						authorization: "Bearer " + localStorage.getItem("jwttoken"),
					},
				}
			);
			navigate("/viewpost");
		} catch (error) {}
	};
	return (
		<div className="create-post-container">
			<center>
				<h1>Social Media App</h1>
			</center>
			<h2>Create Post </h2>
			<form onSubmit={handleForm} className="create-post-form">
				<div className="form-group">
					<label>Title: </label>
					<br></br>
					<input type="text" value={title} onChange={handleTitle}></input>
					<br></br>
					<br></br>
				</div>
				<div className="form-group">
					<label>Content: </label>
					<br></br>
					<input type="text" value={content} onChange={handleContent}></input>
					<br></br>
					<br></br>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
}
