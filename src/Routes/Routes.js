import { createBrowserRouter } from "react-router-dom";
import AddAvatar from "../components/AddAvatar/AddAvatar";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/Login/PrivateRoute";
import SignUp from "../components/Login/SignUp";
import Products from "../components/Products/Products";
import NotFound from "../components/Shared/NotFound";
import Main from "../Layout/Main";


const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/products',
				element: <PrivateRoute><Products /></PrivateRoute>
			},
			{
				path: '/signup',
				element: <SignUp />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/upload',
				element: <AddAvatar />
			}

		]
	}
]);

export default router;