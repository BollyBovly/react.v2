import { ListItem } from "@mui/material"
import { Link } from "react-router-dom";
import { DeleteButton } from "./deleteButton";

export const ChatItem = ({ chat, onDeleteChat }) => (
    <ListItem key={chat.id}>
        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        <DeleteButton id={chat.id} onClick={onDeleteChat} />
    </ListItem>
  );