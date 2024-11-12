import { Route, Routes } from "react-router-dom";
import { Dashboard, StatesTutorial } from "pages";

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/statesTutorial" element={<StatesTutorial />} />
		</Routes>
	);
};

export default PublicRoutes;