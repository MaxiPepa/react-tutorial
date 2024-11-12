import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { PublicLayout } from 'layouts';
import { PageNotFound } from 'pages';
import './index.scss';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/*" element={<PublicLayout />} />
			<Route path="*" element={<PageNotFound />} />
		</Route>
	),
);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
