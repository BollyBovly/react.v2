import { Message } from '../Message/message';

export const MessageList = ({ messages }) => {
	return messages.map((message) => (
	  <div key={message.id}>
		<Message text={message.text} author={message.author} />
	  </div>
	));
};