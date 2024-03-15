import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const [email, setEmail] = useState("");

	const navigate = useNavigate();
	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	// const handleEmail = (event) => {
	// 	setEmail(event.target.value);
	// };

	const handleFormData = async (event) => {
		event.preventDefault();
		try {
			const result = await axios.post("http://localhost:3000/register", {
				username: username,
				password: password,
			});
			if (result.status === 201) {
				navigate("/");
			}
		} catch (error) {}
	};
	return (
		<div className="register-container">
			<center>
				<h1>Social Media App</h1>
			</center>
			<h2>Register</h2>
			<form onSubmit={handleFormData} className="register-form">
				{/* <div className="form-group">
					<label>Email: </label>
					<br></br>
					<input type="email" value={email} onChange={handleEmail}></input>
					<br></br>
					<br></br>
				</div> */}
				<div className="form-group">
					<label>Username: </label>
					<br></br>
					<input type="text" value={username} onChange={handleUsername}></input>
					<br></br>
					<br></br>
				</div>
				<div className="form-group">
					<label>Password: </label>
					<br></br>
					<input type="password" value={password} onChange={handlePassword}></input>
					<br></br>
					<br></br>
				</div>

				<button className="btn btn-primary">Submit</button>
				<br></br>
				<Link to="/">Already have an account? Login here!</Link>
			</form>
		</div>
	);
}
