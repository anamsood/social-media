import { useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [LoginError, setLoginError] = useState("");
	const navigate = useNavigate();

	function handleUsername(event) {
		setUsername(event.target.value);
	}

	function handlePassword(event) {
		setPassword(event.target.value);
	}

	async function handleFormData(event) {
		event.preventDefault();
		try {
			const response = await axios.post("http://localhost:3000/login", {
				username: username,
				password: password,
			});
			// console.log(response);
			localStorage.setItem("jwttoken", response.data.token);
			navigate("/viewpost");
		} catch (error) {
			setLoginError("incorrect username or password");
		}
	}

	return (
		<div className="login">
			<h1>Login</h1>
			<form onSubmit={handleFormData} className="login-form">
				<label>Username: </label>
				<input type="text" value={username} onChange={handleUsername}></input>
				<br></br>
				<label>Password: </label>
				<input type="password" value={password} onChange={handlePassword}></input>
				<br></br>
				<button className="login-btn">Submit</button>
				<Link to="/register">Don't have an account? Register here!</Link>
			</form>
			<h4>{LoginError}</h4>
			{/* <button onClick={() => {navigate("/posts");}}>Login</button> */}
		</div>
	);
}
//localstorage.setitem()
