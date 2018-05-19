import React from 'react'; 
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA39bXMsfmX2-WGPz34B8oeKrGz7UhRH0k';

const App = () => {
	 return (
		<div>
			<div>Hi yay!</div>
			<SearchBar />
		</div>
	);
}


ReactDOM.render(<App />, document.querySelector('.container'));