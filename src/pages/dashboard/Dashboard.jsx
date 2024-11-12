import { Link } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<h1>Práctica de React</h1>
			<div>
				<Link to="/statesTutorial">States</Link>
			</div>
		</div>
	);
};

export default Dashboard;
