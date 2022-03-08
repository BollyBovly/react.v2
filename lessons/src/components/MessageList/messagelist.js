import { Message } from "../Message/message";

export const MessageList = ({message}) => {
    console.log(message[0]?.author);
    return message.map((message) => (
        <div>
            <Message text={message.text} author={message.author}/>
        </div>
    ))
}