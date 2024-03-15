import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login.js";
import Posts from "./Posts.js";
import ViewPost from "./ViewPost.js";
import Register from "./Register.js";
import CreatePost from "./CreatePost.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login></Login>,
		errorElement: <h1>Page not found</h1>,
	},

	{
		path: "/posts",
		element: <Posts></Posts>,
	},

	{
		path: "/viewpost",
		element: <ViewPost></ViewPost>,
	},

	{
		path: "/register",
		element: <Register></Register>,
	},
	{
		path: "/createpost",
		element: <CreatePost></CreatePost>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
