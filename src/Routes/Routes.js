import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import NotFound from "../components/Shared/NotFound";
import Main from "../Layout/Main";
import Login from "../components/Auth/Login";
import Rider from "../components/Auth/Rider";
import Learner from "../components/Auth/Learner";
import Dashboard from "../Layout/Dashboard";
import Profile from "../components/Dashboard/Profile";
import Search from "../components/Dashboard/Search";
import PrivateRoute from "../components/Auth/PrivateRoute";
import Products from "../components/Products/Products";


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
				path: '/services',
				element: <Products />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/signup-rider',
				element: <Rider />
			},
			{
				path: '/signup-learner',
				element: <Learner />
			},
			{
				path: '/dashboard/',
				element: <PrivateRoute><Dashboard /></PrivateRoute>,
				errorElement: <NotFound />,
				children: [
					{
						path: 'profile',
						element: <Profile />
					},
					{
						path: 'Search',
						element: <Search />
					},
				]
			},
		]
	}
]);

export default router;