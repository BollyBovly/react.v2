import { List, ListItem } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addChat, deleteChat } from "../../Store/chats/action";
import { selectChats } from "../../Store/chats/selectors";
import { Forma } from "../Forma/forma";
import { ChatItem } from "./chatItem";

export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch()
    
    
    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId, newChatName));
        
    }

    return (
    <>
        <List>
            {chats.map((chat) => (
                <ChatItem key={chat.id} chat={chat}/>
            ))}
        </List>
        <Forma onSubmit={handleAddChat} />
        <Outlet />
    </>
    )
}