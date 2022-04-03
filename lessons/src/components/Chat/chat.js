import '../../App.css';
import { Forma } from '../../components/Forma/forma';
import { useEffect, useState, useRef} from "react"
import { AUTHORS } from '../../components/utils/constans';
import { MessageList } from '../../components/MessageList/messagelist';
import { useParams } from 'react-router';
import { Ooops } from '../Oops/oops';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessage } from '../../Store/messages/selectors';
import { addMessage } from '../../Store/messages/action';

export function Chat() {
	const dispatch = useDispatch()
    const { chatId } = useParams()
	const messages = useSelector(selectMessage)
  
	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME);
	}

	const sendMessage = (text, author) => {
		const newMessage = {
			text,
			author,
			id: `msg-${Date.now()}`
		};
		dispatch(addMessage(chatId, newMessage));
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
		if (messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.ME) {
			timeout = setTimeout(() => {
				sendMessage('i follow you', AUTHORS.BOT);
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [messages]);

    // if (!messageList[chatId]) {
    //    return <Ooops/>
    // }
  
	return (
		<div className="App">
            <header className="App-header">
			<MessageList messages={messages[chatId]} />

			<Forma onSubmit={handleAddMessage} />
			
		  </header>
		</div>
	);
}

export default Chat;
