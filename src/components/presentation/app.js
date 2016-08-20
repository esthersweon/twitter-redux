import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Sidenav from './sidenav';
import Content from './content';

const App = (props) => {
	return <div>
		<Header/>
		<Sidenav/>
		<Content>
			{ props.children }
		</Content>
	</div>;
};

export default App;
