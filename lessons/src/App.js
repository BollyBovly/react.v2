import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/message';
import { Forma } from './components/Forma/forma';
import { useEffect, useState } from "react"
import { AUTHORS } from './components/utils/constans';
import { MessageList } from './components/MessageList/messagelist';


function App() {
	const [messageList, setMessageList] = useState([
	  { text: "msg1", author: AUTHORS.ME },
	  { text: "i am bot", author: AUTHORS.BOT },
	]);

	const handleMessageClick = () => {
	  console.log("Heeey");
	};
  
	const handleAddMessage = (text) => {
		const newMessage = {
			text,
			author: AUTHORS.ME
			
		};

		setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
	}

	const sendMessage = (text, author) => {
		const newMessage = {
			text,
			author,
			
		};
		setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
	};

	useEffect(() => {
		let timeout;
		if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
			timeout = setTimeout(() => {
				sendMessage('i follow you', AUTHORS.BOT);
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [messageList]);
  
	return (
		<div className="App">
		  <header className="App-header">
			{messageList.map(( message ) => (
				<Message text={message.text} author={message.author} onMessageClick={handleMessageClick} />
			))}

			<Forma onSubmit={handleAddMessage} />
		  </header>
		  
		</div>
	);
  }

export default App;
