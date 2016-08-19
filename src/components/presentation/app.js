import React from 'react';
import ReactDOM from 'react-dom';
import Twitter from './twitter';
import Header from './header';
import Sidenav from './sidenav';

const App = (props) => {
	return <div>
		<Header/>
		<Sidenav/>
		{ props.children }
	</div>;
};

export default App;
