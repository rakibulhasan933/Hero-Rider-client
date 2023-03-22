import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import NotFound from "../components/Shared/NotFound";
import Main from "../Layout/Main";
import Login from "../components/Auth/Login";


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
				path: '/login',
				element: <Login />
			},
		]
	}
]);

export default router;