import '../../App.css';
import { Forma } from '../../components/Forma/forma';
import { useEffect, useState, useRef} from "react"
import { AUTHORS } from '../../components/utils/constans';
import { MessageList } from '../../components/MessageList/messagelist';
import { useParams } from 'react-router';
import { Ooops } from '../Oops/oops';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessage } from '../../Store/messages/selectors';
import { addMessage, addMessageWithThunk } from '../../Store/messages/action';

export function Chat() {
	const { chatId } = useParams();
	const dispatch = useDispatch()
	const messages = useSelector(selectMessage) 
  
	const messagesEnd = useRef();
  
	const handleAddMessage = (text) => {
	  sendMessage(text, AUTHORS.ME);
	};
  
	const sendMessage = (text, author) => {
		const newMsg = {
			text,
			author,
			id: `msg-${Date.now()}`,
		};
		dispatch(addMessageWithThunk(chatId, newMsg));
	};
  
	useEffect(() => {
	  messagesEnd.current?.scrollIntoView();
	}, [messages]);
  
	console.log(chatId)
  
	return (
	  <div className="App">
		<div>
		  <div className="App-header">
			<MessageList messages={messages[chatId]} />
		  </div>
		  <Forma onSubmit={handleAddMessage} />
		</div>
	  </div>
	);
  }