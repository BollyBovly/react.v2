import { Message } from '../Message/message';

export const MessageList = ({ messages }) => {
	return messages.map((msg) => (
	  <div key={msg.id}>
		<Message text={msg.text} author={msg.author} />
	  </div>
	));
};