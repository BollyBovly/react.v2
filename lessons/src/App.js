import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/message';

function App() {
	const handelMessageClick = () => {
		console.log('Click');
	};

	return (
		<div className="App">
			<header className="App-header">
				<Message
					myString="string"
					text="hello"
					onMessageClick={handelMessageClick}
				/>
			</header>
		</div>
	);
}

export default App;
