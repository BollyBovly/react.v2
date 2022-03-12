import { Message } from '../Message/message';

export const MessageList = ({ message }) =>
	message.map((message) => (
		<Message
			text={message.text}
			author={message.author}
			key={message.id}

		/>
	));