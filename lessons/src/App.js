import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/message';
import { Forma } from './components/Forma/forma';
import { useEffect, useState, useRef } from "react"
import { AUTHORS } from './components/utils/constans';
import { MessageList } from './components/MessageList/messagelist';
import { ListMui } from './components/ListMui/listMUI.js';


function App() {
	const [messageList, setMessageList] = useState([]);

  
	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME);
	}

	const chatList = [
		{name: 'chat1', id: '1'},
		{name: 'chat1', id: '1'}
	]

	const sendMessage = (text, author) => {
		const newMessage = {
			text,
			author,
			id: `msg-${Date.now()}`
		};
		setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
	};

	const Input = (props) => {
		const inputRef = useRef(null)
		
		useEffect(() => {
			inputRef.current?.focus()
			
		}, [])
		return(
			<input ref={inputRef}/>
		)
	}

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
			<MessageList message={messageList} />

			<Forma onSubmit={handleAddMessage} autoFocus/>
			<ListMui/>
		  </header>
		  
		</div>
	);
}

export default App;
